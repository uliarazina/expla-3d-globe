import * as THREE from 'three';
import { createGlobeMarkers, markerPosition, markerLocations, resizeGlobeMarkers, updateGlobeMarkers } from '../../src/components/globeMarkers.js';
export function checkMarkerRendering() {
  const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
  renderer.setSize(128, 128); renderer.setClearColor(0x000000);
  const scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(45, 1, .1, 10);
  camera.position.z = 3; camera.updateProjectionMatrix();
  const sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 48, 32), new THREE.MeshBasicMaterial({ color: '#212121' }));
  const dots = createGlobeMarkers(); sphere.add(dots); scene.add(sphere);
  resizeGlobeMarkers(dots, { width: 128, height: 128, pixelRatio: 1, camera });
  dots.geometry.setDrawRange(3, 1); // Actual USA coordinates, rotated to the centre for size checks.
  const direction = new THREE.Vector3(...markerPosition(markerLocations[3][1], markerLocations[3][2])).normalize();
  const face = target => sphere.quaternion.setFromUnitVectors(direction, new THREE.Vector3(...target).normalize());
  dots.geometry.attributes.startTime.setX(3, 0); dots.geometry.attributes.startTime.needsUpdate = true;
  const pixels = new Uint8Array(128 * 128 * 4), gl = renderer.getContext();
  const sample = time => {
    dots.material.uniforms.time.value = time; renderer.render(scene, camera);
    gl.readPixels(0, 0, 128, 128, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
    let white = 0, outside = 0, minX = 128, minY = 128, maxX = 0, maxY = 0;
    for (let y = 0; y < 128; y++) for (let x = 0; x < 128; x++) {
      const i = (y * 128 + x) * 4;
      if (pixels[i] > 60 && pixels[i+1] > 60 && pixels[i+2] > 60) {
        white++; minX = Math.min(minX,x); maxX = Math.max(maxX,x); minY = Math.min(minY,y); maxY = Math.max(maxY,y);
        if (Math.hypot(x+.5-64, y+.5-64) > dots.material.uniforms.sphereRadius.value + .5) outside++;
      }
    }
    return { white, outside, width: white ? maxX-minX+1 : 0, height: white ? maxY-minY+1 : 0 };
  };
  try {
    face([0,0,1]); const early = sample(.2), expanded = sample(.8), faded = sample(2);
    face([0,0,-1]); const back = sample(.8);
    face([.835,0,.55]); const limb = sample(.8);
    dots.material.uniforms.reducedMotion.value = 1;
    face([0,0,1]); const staticA = sample(2), staticB = sample(20);
    const budget = [];
    for (const mobile of [false,true]) {
      const scheduled = createGlobeMarkers(); sphere.add(scheduled);
      let maximum = 0; const visited = new Set();
      for (let t = 0; t < 150; t += .05) {
        sphere.rotation.set(.5, -1.45 + t * Math.PI / 30, 0);
        updateGlobeMarkers(scheduled, { time: t, camera, mobile });
        const starts = scheduled.geometry.attributes.startTime;
        let active = 0;
        for (let i = 0; i < starts.count; i++) {
          if (starts.getX(i) >= 0) visited.add(i);
          if (t >= starts.getX(i) && t - starts.getX(i) < scheduled.material.uniforms.duration.value) active++;
        }
        maximum = Math.max(maximum, active);
      }
      budget.push({ mobile, maximum, visited: visited.size, diameter: scheduled.material.uniforms.diameter.value });
      sphere.remove(scheduled); scheduled.geometry.dispose(); scheduled.material.dispose();
    }
    return { early, expanded, faded, back, limb, staticA, staticB, budget, parented: dots.parent === sphere, count: dots.geometry.attributes.position.count };
  } finally {
    dots.geometry.dispose(); dots.material.dispose(); sphere.geometry.dispose(); sphere.material.dispose(); renderer.dispose();
  }
}
