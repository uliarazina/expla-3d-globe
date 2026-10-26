import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import backgroundUrl from '../assets/top-100-background.png';

export default function HeroBackground() {
  const mount = useRef(null);
  useEffect(() => {
    const host = mount.current, section = host.parentElement;
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    let renderer, geometry, material, frame = null, last = null, elapsed = 0, visible = true;
    let activity = 0, texture, textureReady = false, disposed = false;
    const target = new THREE.Vector2(.5, .5);
    const schedule = () => { if (frame === null) frame = requestAnimationFrame(render); };
    const reset = () => { last = null; schedule(); };
    let resizeObserver, intersection;
    function render(time) {
      frame = null;
      if (!visible || document.hidden || !renderer || !textureReady) { last = null; return; }
      const delta = last === null ? 0 : Math.min((time - last) / 1000, .1); last = time;
      if (!motion.matches) elapsed += delta;
      material.uniforms.time.value = motion.matches ? 0 : elapsed;
      if (motion.matches) {
        material.uniforms.pointer.value.set(.5, .5); material.uniforms.activity.value = 0;
      } else {
        activity *= Math.exp(-delta * .8);
        material.uniforms.pointer.value.lerp(target, 1 - Math.exp(-delta * 7));
        material.uniforms.activity.value = THREE.MathUtils.lerp(material.uniforms.activity.value, activity, 1 - Math.exp(-delta * 6));
      }
      renderer.render(scene, camera);
      if (!motion.matches) schedule();
    }
    let scene, camera;
    const move = event => { const r = section.getBoundingClientRect(); const x = THREE.MathUtils.clamp((event.clientX - r.left) / r.width, 0, 1), y = THREE.MathUtils.clamp(1 - (event.clientY - r.top) / r.height, 0, 1); activity = Math.min(1, activity + .22 + Math.hypot(x - target.x, y - target.y) * 12); target.set(x, y); schedule(); };
    const leave = () => { activity = 0; target.set(.5, .5); schedule(); };
    try {
      renderer = new THREE.WebGLRenderer({ alpha: false, antialias: false, powerPreference: 'low-power' });
      renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1));
      renderer.domElement.setAttribute('aria-hidden', 'true'); host.appendChild(renderer.domElement);
      scene = new THREE.Scene(); camera = new THREE.Camera(); geometry = new THREE.PlaneGeometry(2, 2);
      texture = new THREE.TextureLoader().load(backgroundUrl, () => {
        if (disposed) return;
        textureReady = true; reset();
      });
      texture.colorSpace = THREE.SRGBColorSpace;
      material = new THREE.ShaderMaterial({
        uniforms: { backgroundMap: { value: texture }, time: { value: 0 }, aspect: { value: 1 }, pointer: { value: new THREE.Vector2(.5, .5) }, activity: { value: 0 } },
        vertexShader: 'varying vec2 uvPosition; void main(){uvPosition=uv;gl_Position=vec4(position,1.0);}',
        fragmentShader: `
          uniform float time, aspect, activity;
          uniform vec2 pointer;
          uniform sampler2D backgroundMap;
          varying vec2 uvPosition;
          void main(){
            vec2 uv=uvPosition;
            float t=time*1.2;
            // Continuous autonomous flow starts with the uploaded image at t=0.
            vec2 drift=vec2(sin(t+uv.y*3.0)-sin(uv.y*3.0),
              sin(t*.73+uv.x*4.0)-sin(uv.x*4.0))*.13;
            vec2 offset=(uv-pointer)*vec2(aspect,1.0);
            float influence=exp(-dot(offset,offset)*1.4);
            vec2 swirl=vec2(-offset.y,offset.x)/vec2(aspect,1.0);
            vec2 reactive=(swirl*.24+(pointer-.5)*.14)*activity*influence;
            // Anchor the image edges so movement never reveals empty borders.
            vec2 envelope=sin(uv*3.14159265);
            uv+=(drift+reactive)*envelope;
            gl_FragColor=vec4(texture2D(backgroundMap,uv).rgb,1.0);
            #include <colorspace_fragment>
          }
        `,
      });
      scene.add(new THREE.Mesh(geometry, material));
      const resize = () => { const { width, height } = host.getBoundingClientRect(); if (!width || !height) return; renderer.setSize(width, height); material.uniforms.aspect.value = width / height; reset(); };
      resizeObserver = new ResizeObserver(resize); resizeObserver.observe(host);
      intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; reset(); }); intersection.observe(host);
      section.addEventListener('pointermove', move); section.addEventListener('pointerleave', leave);
      section.addEventListener('pointercancel', leave);
      document.addEventListener('visibilitychange', reset); motion.addEventListener('change', reset);
      resize();
    } catch { host.dataset.fallback = 'true'; renderer?.domElement.remove(); }
    return () => {
      disposed = true; texture?.dispose();
      cancelAnimationFrame(frame); resizeObserver?.disconnect(); intersection?.disconnect();
      section.removeEventListener('pointermove', move); section.removeEventListener('pointerleave', leave); section.removeEventListener('pointercancel', leave);
      document.removeEventListener('visibilitychange', reset); motion.removeEventListener('change', reset);
      geometry?.dispose(); material?.dispose(); renderer?.dispose(); renderer?.domElement.remove();
    };
  }, []);
  return <div className="hero-background" ref={mount} style={{ backgroundImage: `url(${backgroundUrl})`, backgroundSize: '100% 100%' }} aria-hidden="true"/>;
}
