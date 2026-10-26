import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroBackground() {
  const mount = useRef(null);
  useEffect(() => {
    const host = mount.current, section = host.parentElement;
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    let renderer, geometry, material, frame = null, last = null, elapsed = 0, visible = true;
    let activity = 0;
    const target = new THREE.Vector2(.5, .5);
    const schedule = () => { if (frame === null) frame = requestAnimationFrame(render); };
    const reset = () => { last = null; schedule(); };
    let resizeObserver, intersection;
    function render(time) {
      frame = null;
      if (!visible || document.hidden || !renderer) { last = null; return; }
      const delta = last === null ? 0 : Math.min((time - last) / 1000, .1); last = time;
      if (!motion.matches) elapsed += delta;
      material.uniforms.time.value = elapsed;
      if (motion.matches) {
        material.uniforms.pointer.value.set(.5, .5); material.uniforms.activity.value = 0;
      } else {
        material.uniforms.pointer.value.lerp(target, 1 - Math.exp(-delta * 5));
        material.uniforms.activity.value = THREE.MathUtils.lerp(material.uniforms.activity.value, activity, 1 - Math.exp(-delta * 3));
      }
      renderer.render(scene, camera);
      if (!motion.matches) schedule();
    }
    let scene, camera;
    const move = event => { const r = section.getBoundingClientRect(); target.set((event.clientX - r.left) / r.width, 1 - (event.clientY - r.top) / r.height); activity = 1; schedule(); };
    const leave = () => { activity = 0; target.set(.5, .5); schedule(); };
    try {
      renderer = new THREE.WebGLRenderer({ alpha: false, antialias: false, powerPreference: 'low-power' });
      renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1));
      renderer.domElement.setAttribute('aria-hidden', 'true'); host.appendChild(renderer.domElement);
      scene = new THREE.Scene(); camera = new THREE.Camera(); geometry = new THREE.PlaneGeometry(2, 2);
      material = new THREE.ShaderMaterial({
        uniforms: { time: { value: 0 }, aspect: { value: 1 }, pointer: { value: new THREE.Vector2(.5, .5) }, activity: { value: 0 }, base: { value: new THREE.Color('#0e0e12') } },
        vertexShader: 'varying vec2 uvPosition; void main(){uvPosition=uv;gl_Position=vec4(position,1.0);}',
        fragmentShader: `
          uniform float time, aspect, activity; uniform vec2 pointer; uniform vec3 base;
          varying vec2 uvPosition;
          float ribbon(vec2 uv, float anchor, float bend, float phase){
            float center=anchor+bend*(uv.y-.5)+.045*sin(uv.y*5.0+phase);
            float width=.024+.015*sin(uv.y*3.2+phase);
            float d=(uv.x-center)/width;
            return exp(-d*d)*(.65+.35*sin(uv.y*6.0+phase));
          }
          void main(){
            vec2 p=(uvPosition-.5)*vec2(aspect,1.0);
            vec2 mouse=(pointer-.5)*vec2(aspect,1.0);
            float radius=length(p-mouse);
            float t=time*.065;
            float angle=activity*exp(-radius*radius*1.5)*sin(t+radius*4.0)*.65;
            mat2 turn=mat2(cos(angle),-sin(angle),sin(angle),cos(angle));
            p=mouse+turn*(p-mouse);
            vec2 uv=p/vec2(aspect,1.0)+.5;
            float streams=ribbon(uv,.06,.24,t)+ribbon(uv,.17,.18,t+1.4)*.8
              +ribbon(uv,.28,.13,t+3.0)*.55+ribbon(uv,.80,.25,t+1.0)
              +ribbon(uv,.94,.20,t+3.8)*.7;
            float left=(uv.x-.13)/.17;
            float right=(uv.x-.85)/.18;
            float haze=exp(-left*left)+exp(-right*right);
            float center=(uvPosition.x-.5)/.23;
            float readability=1.0-.78*exp(-center*center);
            float edge=.4+.6*sin(uvPosition.y*3.14159);
            float hover=1.0+activity*.5*exp(-radius*2.0);
            vec3 emerald=vec3(.0015,.070,.034)*min(streams,1.3)
              +vec3(.0007,.017,.009)*haze;
            gl_FragColor=vec4(vec3(.0004,.001,.0007)+emerald*readability*edge*hover,1.0);
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
      cancelAnimationFrame(frame); resizeObserver?.disconnect(); intersection?.disconnect();
      section.removeEventListener('pointermove', move); section.removeEventListener('pointerleave', leave); section.removeEventListener('pointercancel', leave);
      document.removeEventListener('visibilitychange', reset); motion.removeEventListener('change', reset);
      geometry?.dispose(); material?.dispose(); renderer?.dispose(); renderer?.domElement.remove();
    };
  }, []);
  return <div className="hero-background" ref={mount} aria-hidden="true"/>;
}
