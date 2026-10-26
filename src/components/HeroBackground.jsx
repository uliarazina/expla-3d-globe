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
        activity *= Math.exp(-delta * 1.3);
        material.uniforms.pointer.value.lerp(target, 1 - Math.exp(-delta * 5));
        material.uniforms.activity.value = THREE.MathUtils.lerp(material.uniforms.activity.value, activity, 1 - Math.exp(-delta * 3));
      }
      renderer.render(scene, camera);
      if (!motion.matches) schedule();
    }
    let scene, camera;
    const move = event => { const r = section.getBoundingClientRect(); const x = THREE.MathUtils.clamp((event.clientX - r.left) / r.width, 0, 1), y = THREE.MathUtils.clamp(1 - (event.clientY - r.top) / r.height, 0, 1); activity = Math.min(1, activity + .25 + Math.hypot(x - target.x, y - target.y) * 12); target.set(x, y); schedule(); };
    const leave = () => { activity = 0; target.set(.5, .5); schedule(); };
    try {
      renderer = new THREE.WebGLRenderer({ alpha: false, antialias: false, powerPreference: 'low-power' });
      renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1));
      renderer.domElement.setAttribute('aria-hidden', 'true'); host.appendChild(renderer.domElement);
      scene = new THREE.Scene(); camera = new THREE.Camera(); geometry = new THREE.PlaneGeometry(2, 2);
      material = new THREE.ShaderMaterial({
        uniforms: { time: { value: 0 }, aspect: { value: 1 }, pointer: { value: new THREE.Vector2(.5, .5) }, activity: { value: 0 } },
        vertexShader: 'varying vec2 uvPosition; void main(){uvPosition=uv;gl_Position=vec4(position,1.0);}',
        fragmentShader: `
          uniform float time, aspect, activity; uniform vec2 pointer;
          varying vec2 uvPosition;
          float band(float distance, float width){
            float d=distance/width; return exp(-d*d);
          }
          void main(){
            vec2 p=(uvPosition-.5)*vec2(aspect,1.0);
            vec2 mouse=(pointer-.5)*vec2(aspect,1.0);
            float radius=length(p-mouse);
            float t=time*.24;
            float angle=sin(t*.45)*.025+activity*exp(-radius*radius*1.5)*sin(t*.8+radius*4.0)*.9;
            mat2 turn=mat2(cos(angle),-sin(angle),sin(angle),cos(angle));
            p=mouse+turn*(p-mouse);
            vec2 uv=p/vec2(aspect,1.0)+.5;
            uv+=vec2(.012*sin(t*.8+uv.y*4.0),.008*sin(t*.6+uv.x*3.0));
            // Curved, feathered aurora arcs follow the supplied wide reference:
            // a bright lower-left sweep and a taller upper-right crescent.
            vec2 rightCenter=vec2(.56+.008*sin(t*.5),.95);
            float rightRadius=length((uv-rightCenter)/vec2(.36,.98));
            float rightSide=smoothstep(-.10,.10,uv.x-rightCenter.x);
            float rightFlow=.72+.28*sin(uv.y*6.0-t*1.4);
            float right=(band(rightRadius-1.0,.10)+.32*band(rightRadius-.975-.006*sin(t),.012)
              +.20*band(rightRadius-1.045,.018))*rightSide*rightFlow;
            float leftRadius=length((uv-vec2(.37,.05))/vec2(.37,1.2));
            float leftSide=1.0-smoothstep(.28,.5,uv.x);
            float left=(band(leftRadius-1.0,.13)+.18*band(leftRadius-.94,.014))
              *leftSide*(.35+.65*(1.0-uv.y));
            float leftGlow=band(uv.x-.015,.16)*(.3+.7*(1.0-uv.y));
            float center=(uvPosition.x-.5)/.23;
            float readability=1.0-.65*exp(-center*center);
            float hover=1.0+activity*.8*exp(-radius*2.0);
            vec3 emerald=vec3(.0008,.053,.027)*right+vec3(.0006,.040,.024)*left
              +vec3(.0002,.025,.016)*leftGlow;
            gl_FragColor=vec4(vec3(.0003,.0009,.0006)+emerald*readability*hover,1.0);
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
