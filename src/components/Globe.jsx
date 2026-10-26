import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { geoEquirectangular, geoPath, geoArea } from 'd3-geo';
import './Globe.css';
import { createGlobeMaterial } from './globeMaterial.js';

/** Standalone, transparent globe. The parent controls its size. */
export default function Globe({
  dataUrl = '/data/countries.geojson',
  rotationPeriod = 20,
  paused = false,
  interactive = true,
  landColor = '#00f58a',
  oceanColor = '#111215',
  borderColor = '#00e580',
  relief = 0.012,
  rimStrength = 0.20,
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
        // The separate mask joins neighboring fills: internal borders never become cracks.
        const mask = document.createElement('canvas');
        mask.width = width; mask.height = width / 2;
        const maskContext = mask.getContext('2d');
        maskContext.fillStyle = '#000'; maskContext.fillRect(0, 0, width, width / 2);
        maskContext.fillStyle = '#fff';
        const maskPath = geoPath(projection, maskContext);
        for (const feature of data.features) {
          maskContext.beginPath(); maskPath(feature); maskContext.fill();
          // Fill antialias gaps between adjacent included countries without touching excluded features.
          maskContext.strokeStyle = '#fff'; maskContext.lineWidth = 0.4; maskContext.stroke();
        }
        const pixels = maskContext.getImageData(0, 0, width, width / 2);
        const raw = pixels.data.slice();
        const height = mask.height;
        const coverage = (x, y) => raw[(Math.max(0, Math.min(height - 1, y)) * width + (x + width) % width) * 4];
        // Prebake the coast bevel and shadow instead of doing six texture lookups per fragment.
        for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
          const offset = (y * width + x) * 4;
          pixels.data[offset + 1] = Math.round(127.5 + (coverage(x + 1, y) - coverage(x - 1, y)) / 2);
          pixels.data[offset + 2] = Math.round(127.5 + (coverage(x, y - 1) - coverage(x, y + 1)) / 2);
          pixels.data[offset + 3] = coverage(x - 2, y - 2);
        }
        // Typed data preserves all four independent channels, including RGB where A=0.
        const packed = new Uint8Array(pixels.data.length);
        for (let y = 0; y < height; y++) {
          packed.set(pixels.data.subarray(y * width * 4, (y + 1) * width * 4), (height - 1 - y) * width * 4);
        }
        const reliefMap = new THREE.DataTexture(packed, width, height, THREE.RGBAFormat);
        reliefMap.minFilter = THREE.LinearFilter;
        reliefMap.magFilter = THREE.LinearFilter;
        reliefMap.needsUpdate = true;
        resources.push(reliefMap);
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
        // One draw call, no shadow maps or post-processing. Relief is continuous,
        // so excluded geography exposes the intact sphere rather than cutting holes.
        const geometry = new THREE.SphereGeometry(1, 64, 48);
        const positions = geometry.attributes.position;
        const uv = geometry.attributes.uv;
        for (let index = 0; index < positions.count; index++) {
          const land = coverage(Math.round(uv.getX(index) * (width - 1)), Math.round((1 - uv.getY(index)) * (height - 1))) / 255;
          const scale = 1 + land * Math.max(0, Math.min(0.03, relief));
          positions.setXYZ(index, positions.getX(index) * scale, positions.getY(index) * scale, positions.getZ(index) * scale);
        }
        geometry.computeBoundingSphere();
        const material = createGlobeMaterial({ colorMap: texture, reliefMap,
          textureWidth: width, relief: Math.max(0, Math.min(0.03, relief)),
          rimStrength: Math.max(0, Math.min(1, rimStrength)) });
        resources.push(geometry, material);
        globe = new THREE.Mesh(geometry, material);
        globe.rotation.set(0.5, -1.45, 0);
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
  }, [dataUrl, interactive, landColor, oceanColor, borderColor, relief, rimStrength, maxPixelRatio, textureWidth]);

  return <div className={`expla-globe ${className}`} style={style} ref={mount} data-interactive={interactive}>
    {error && <p className="expla-globe__error" role="alert">{error}</p>}
  </div>;
}
