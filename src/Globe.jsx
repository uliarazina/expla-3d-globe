import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { geoEquirectangular, geoPath, geoArea } from 'd3-geo';

export default function Globe({ paused }) {
  const mount = useRef(null);
  const pauseRef = useRef(paused);
  const [error, setError] = useState('');
  useEffect(()=>{ pauseRef.current = paused; },[paused]);
  useEffect(()=>{
    let renderer, controls, frame, observer, disposed=false;
    const resources=[];
    const controller=new AbortController();
    const media=window.matchMedia('(prefers-reduced-motion: reduce)');
    const host=mount.current;
    async function init(){
      try {
        const response=await fetch('/data/countries.geojson',{signal:controller.signal});
        if(!response.ok) throw new Error('Geography unavailable');
        const data=await response.json();
        if(disposed) return;
        // Defense in depth: excluded countries never reach the texture renderer.
        data.features=data.features.filter(f=>!['RUS','BLR'].includes(f.properties.iso_a3));
        // Normalize every ring: tiny simplified islands can have mixed winding.
        for (const f of data.features) {
          const polygons=f.geometry.type==='Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates;
          for (const polygon of polygons) polygon.forEach((ring,index)=>{
            const area=geoArea({type:'Polygon',coordinates:[ring]});
            if ((index===0 && area>2*Math.PI)||(index>0 && area<2*Math.PI)) ring.reverse();
          });
        }
        const canvas=document.createElement('canvas'); canvas.width=4096; canvas.height=2048;
        const ctx=canvas.getContext('2d');
        ctx.fillStyle='#10271d';ctx.fillRect(0,0,4096,2048);
        const projection=geoEquirectangular().scale(4096/(2*Math.PI)).translate([2048,1024]);
        const path=geoPath(projection,ctx);
        for(const f of data.features){ctx.beginPath();path(f);ctx.fillStyle='#6ba984';ctx.fill();ctx.strokeStyle='#254d39';ctx.lineWidth=1.7;ctx.stroke();}
        const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=4;resources.push(texture);
        renderer=new THREE.WebGLRenderer({alpha:true,antialias:true});
        renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));renderer.setClearColor(0x000000,0);
        renderer.outputColorSpace=THREE.SRGBColorSpace;
        host.appendChild(renderer.domElement);
        const scene=new THREE.Scene();
        const camera=new THREE.PerspectiveCamera(34,1,.1,100);camera.position.set(0,0,4.1);
        scene.add(new THREE.AmbientLight(0x8dba9d,1.6));
        const key=new THREE.DirectionalLight(0xd1ffe0,2.6);key.position.set(-3,4,5);scene.add(key);
        const geometry=new THREE.SphereGeometry(1,128,96);
        const material=new THREE.MeshStandardMaterial({map:texture,roughness:.88,metalness:.12});resources.push(geometry,material);
        const globe=new THREE.Mesh(geometry,material);globe.rotation.y=-1.25;globe.rotation.z=.12;scene.add(globe);
        controls=new OrbitControls(camera,renderer.domElement);controls.enableZoom=false;controls.enablePan=false;controls.enableDamping=false;controls.dampingFactor=.065;controls.rotateSpeed=.55;controls.autoRotateSpeed=.32;controls.minPolarAngle=.3;controls.maxPolarAngle=Math.PI-.3;
        renderer.domElement.setAttribute('aria-label','Interactive globe. Drag to rotate. Use arrow keys while focused to explore.');renderer.domElement.setAttribute('role','img');renderer.domElement.tabIndex=0;
        controls.listenToKeyEvents(renderer.domElement);
        observer=new ResizeObserver(()=>{const {width,height}=host.getBoundingClientRect();if(!width||!height)return;renderer.setSize(width,height);camera.aspect=width/height;camera.updateProjectionMatrix();});observer.observe(host);
        const clock=new THREE.Clock();
        const animate=()=>{if(disposed)return;controls.autoRotate=!pauseRef.current&&!media.matches;controls.update(Math.min(clock.getDelta(),.05));renderer.render(scene,camera);frame=requestAnimationFrame(animate);};animate();
      }catch(e){if(!disposed && e.name!=='AbortError')setError('The globe could not load. Please refresh or try a browser with WebGL enabled.');}
    }
    init();
    return ()=>{disposed=true;controller.abort();cancelAnimationFrame(frame);observer?.disconnect();controls?.dispose();resources.forEach(r=>r.dispose());renderer?.dispose();renderer?.domElement.remove();};
  },[]);
  return <div className="globe-mount" ref={mount}>{error&&<p className="globe-error" role="alert">{error}</p>}</div>;
}
