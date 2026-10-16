import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { geoEquirectangular, geoPath, geoArea } from 'd3-geo';
import './Globe.css';

/** Standalone, transparent globe. The parent controls its size. */
export default function Globe({
  dataUrl = '/data/countries.geojson',
  rotationPeriod = 20,
  paused = false,
  interactive = true,
  landColor = '#86c9a0',
  oceanColor = '#142e23',
  borderColor = '#3d7657',
  maxPixelRatio = 1.5,
  textureWidth = 2048,
  className = '',
  style,
  onFrame,
  onReady,
}) {
  const mount = useRef(null);
  const live = useRef({ paused, rotationPeriod, onFrame, onReady });
  const wake = useRef(() => {});
  const [error, setError] = useState('');
  useEffect(() => {
    live.current = { paused, rotationPeriod, onFrame, onReady };
    wake.current();
  }, [paused, rotationPeriod, onFrame, onReady]);

  useEffect(() => {
    const host = mount.current;
    const abort = new AbortController();
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const resources = [];
    let renderer, controls, resizeObserver, intersectionObserver;
    let disposed = false, frame = null, previousTime = null, inView = true;
    let elapsed = 0;
    const schedule = () => {
      if (!disposed && frame === null) frame = requestAnimationFrame(render);
    };
    const resetTime = () => { previousTime = null; schedule(); };
    wake.current = resetTime;

    function render(timestamp) {
      frame = null;
      if (disposed || !renderer || document.hidden || !inView) {
        previousTime = null;
        return;
      }
      const delta = previousTime === null ? 0 : (timestamp - previousTime) / 1000;
      previousTime = timestamp;
      const { paused, rotationPeriod, onFrame } = live.current;
      const spinning = !paused && !motion.matches && Number.isFinite(rotationPeriod) && rotationPeriod > 0;
      // Integrate actual rAF time: frame drops never slow the revolution period.
      // Keep the angle unwrapped, avoiding a discontinuity at the loop boundary.
      if (spinning) globe.rotation.y += (Math.PI * 2 / rotationPeriod) * delta;
      elapsed += delta;
      controls.update();
      renderer.render(scene, camera);
      onFrame?.({ timestamp, delta, elapsed, rotation: globe.rotation.y,
        drawCalls: renderer.info.render.calls, triangles: renderer.info.render.triangles });
      if (spinning) schedule();
      else previousTime = null;
    }

    let scene, camera, globe;
    async function initialize() {
      try {
        setError('');
        const response = await fetch(dataUrl, { signal: abort.signal });
        if (!response.ok) throw new Error(`Geography request failed (${response.status})`);
        const data = await response.json();
        if (disposed) return;
        // Exclusions apply to fills and outlines, never to the underlying sphere.
        data.features = data.features.filter(feature =>
          !['RUS', 'BLR'].includes(feature.properties.iso_a3 ?? feature.properties['ISO3166-1-Alpha-3']));
        for (const feature of data.features) {
          const polygons = feature.geometry.type === 'Polygon'
            ? [feature.geometry.coordinates] : feature.geometry.coordinates;
          for (const polygon of polygons) polygon.forEach((ring, index) => {
            const area = geoArea({ type: 'Polygon', coordinates: [ring] });
            if ((index === 0 && area > 2 * Math.PI) || (index > 0 && area < 2 * Math.PI)) ring.reverse();
          });
        }
        const width = Math.min(4096, Math.max(512, Math.round(textureWidth)));
        const atlas = document.createElement('canvas');
        atlas.width = width; atlas.height = width / 2;
        const context = atlas.getContext('2d');
        context.fillStyle = oceanColor; context.fillRect(0, 0, width, width / 2);
        const projection = geoEquirectangular().scale(width / (2 * Math.PI)).translate([width / 2, width / 4]);
        const path = geoPath(projection, context);
        context.fillStyle = landColor; context.strokeStyle = borderColor;
        context.lineWidth = width / 4096 * 1.5;
        for (const feature of data.features) {
          context.beginPath(); path(feature); context.fill(); context.stroke();
        }
        const texture = new THREE.CanvasTexture(atlas);
        texture.colorSpace = THREE.SRGBColorSpace;
        resources.push(texture);
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, Math.max(1, maxPixelRatio)));
        renderer.setClearColor(0x000000, 0);
        texture.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
        host.appendChild(renderer.domElement);
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(34, 1, 0.1, 20);
        camera.position.set(0, 0, 3.7);
        // One draw call; unlit material preserves the flat illustrated colors.
        const geometry = new THREE.SphereGeometry(1, 64, 48);
        const material = new THREE.MeshBasicMaterial({ map: texture });
        resources.push(geometry, material);
        globe = new THREE.Mesh(geometry, material);
        globe.rotation.set(0.12, -1.25, 0);
        scene.add(globe);
        controls = new OrbitControls(camera, renderer.domElement);
        controls.enabled = interactive;
        controls.enableZoom = false; controls.enablePan = false;
        controls.enableDamping = false; controls.autoRotate = false;
        controls.rotateSpeed = 0.55;
        controls.minPolarAngle = 0.15; controls.maxPolarAngle = Math.PI - 0.15;
        controls.addEventListener('change', schedule);
        const canvas = renderer.domElement;
        canvas.setAttribute('role', 'img');
        canvas.setAttribute('aria-label', interactive
          ? 'Animated globe. Drag or use arrow keys while focused to rotate.' : 'Animated globe.');
        if (interactive) { canvas.tabIndex = 0; controls.listenToKeyEvents(canvas); }
        const resize = () => {
          const { width, height } = host.getBoundingClientRect();
          if (!width || !height) return;
          renderer.setSize(width, height);
          camera.aspect = width / height; camera.updateProjectionMatrix();
          // Fit a complete sphere even in portrait-shaped embedding containers.
          camera.position.setLength(3.7 / Math.min(1, camera.aspect));
          resetTime();
        };
        resizeObserver = new ResizeObserver(resize); resizeObserver.observe(host); resize();
        intersectionObserver = new IntersectionObserver(([entry]) => {
          inView = entry.isIntersecting; resetTime();
        });
        intersectionObserver.observe(host);
        document.addEventListener('visibilitychange', resetTime);
        motion.addEventListener('change', resetTime);
        live.current.onReady?.();
        schedule();
      } catch (cause) {
        if (!disposed && cause.name !== 'AbortError') {
          setError('The globe could not load. Check the geography URL and WebGL browser support.');
        }
      }
    }
    initialize();
    return () => {
      disposed = true; abort.abort(); cancelAnimationFrame(frame);
      wake.current = () => {};
      document.removeEventListener('visibilitychange', resetTime);
      motion.removeEventListener('change', resetTime);
      resizeObserver?.disconnect(); intersectionObserver?.disconnect();
      controls?.dispose(); resources.forEach(resource => resource.dispose());
      renderer?.dispose(); renderer?.domElement.remove();
    };
  }, [dataUrl, interactive, landColor, oceanColor, borderColor, maxPixelRatio, textureWidth]);

  return <div className={`expla-globe ${className}`} style={style} ref={mount} data-interactive={interactive}>
    {error && <p className="expla-globe__error" role="alert">{error}</p>}
  </div>;
}
