import * as THREE from 'three';
import { createGlobeMarkers } from '../../src/components/globeMarkers.js';
export function checkMarkerRendering() {
  const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
  renderer.setSize(128, 128); renderer.setClearColor(0x000000);
  const scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(45, 1, .1, 10);
  camera.position.z = 3;
  const sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 48, 32), new THREE.MeshBasicMaterial({ color: '#212121' }));
  const dots = createGlobeMarkers(); sphere.add(dots); scene.add(sphere);
  dots.geometry.setDrawRange(3, 1); // Actual USA marker, on the initial front hemisphere.
  const pixels = new Uint8Array(128 * 128 * 4), gl = renderer.getContext();
  const sample = () => {
    renderer.render(scene, camera);
    gl.readPixels(0, 0, 128, 128, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
    let white = 0;
    for (let i = 0; i < pixels.length; i += 4) if (pixels[i] > 80 && pixels[i+1] > 80 && pixels[i+2] > 80) white++;
    return white;
  };
  try {
    const front = sample();
    sphere.rotation.y = Math.PI; const back = sample();
    sphere.rotation.y = 0;
    const phase = dots.geometry.attributes.phase.getX(3), frequency = .55 + .12 * Math.sin(phase);
    let trough = (Math.PI * 1.5 - phase) / frequency;
    while (trough < 0) trough += 2 * Math.PI / frequency;
    dots.material.uniforms.time.value = trough;
    const faded = sample();
    return { front, back, faded, parented: dots.parent === sphere, count: dots.geometry.attributes.position.count };
  } finally {
    dots.geometry.dispose(); dots.material.dispose(); sphere.geometry.dispose(); sphere.material.dispose(); renderer.dispose();
  }
}
