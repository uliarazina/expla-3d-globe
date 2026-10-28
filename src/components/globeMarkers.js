import * as THREE from 'three';

// Representative city coordinates in degrees (latitude, longitude), one per country.
// City locations are chosen on land in the shipped geography, avoiding clipped harbour/island edges.
export const markerLocations = [
  ['AUS', -33.8688, 151.2093], ['GBR', 51.5074, -.1278], ['CAN', 43.6532, -79.3832],
  ['USA', 38.9072, -77.0369], ['NZL', -36.8485, 174.7633], ['AUT', 48.2082, 16.3738],
  ['BEL', 50.8503, 4.3517], ['DEU', 52.5200, 13.4050], ['DNK', 55.4038, 10.4024],
  ['IRL', 53.3498, -6.2603], ['ITA', 41.9028, 12.4964], ['ISL', 64.1265, -21.8174],
  ['ISR', 32.0853, 34.7818], ['NLD', 52.3676, 4.9041], ['NOR', 59.9139, 10.7522],
  ['SVN', 46.0569, 14.5058], ['FIN', 60.1699, 24.9384], ['FRA', 48.8566, 2.3522],
  ['CZE', 50.0755, 14.4378], ['SWE', 59.3293, 18.0686], ['CHE', 46.9480, 7.4474],
  ['ESP', 40.4168, -3.7038],
];
export function markerPosition(latitude, longitude, radius = 1.001) {
  const lat = THREE.MathUtils.degToRad(latitude), lon = THREE.MathUtils.degToRad(longitude);
  // Same longitude origin and UV orientation as SphereGeometry and the geographic atlas.
  return [radius * Math.cos(lat) * Math.cos(lon), radius * Math.sin(lat), -radius * Math.cos(lat) * Math.sin(lon)];
}
export function createGlobeMarkers() {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(markerLocations.flatMap(([, lat, lon]) => markerPosition(lat, lon)), 3));
  geometry.setAttribute('phase', new THREE.Float32BufferAttribute(markerLocations.map((_, i) => i * 2.399963), 1));
  const material = new THREE.ShaderMaterial({
    transparent: true, depthTest: true, depthWrite: false,
    uniforms: { time: { value: 0 }, pixelRatio: { value: 1 } },
    vertexShader: `
      uniform float time, pixelRatio;
      attribute float phase;
      varying float opacity;
      void main(){
        vec4 view=modelViewMatrix*vec4(position,1.0);
        float facing=dot(normalize(normalMatrix*normalize(position)),normalize(-view.xyz));
        float pulse=.5+.5*sin(time*(.55+.12*sin(phase))+phase);
        opacity=.60*smoothstep(.08,.30,facing)*smoothstep(.12,.85,pulse);
        gl_Position=projectionMatrix*view;
        gl_PointSize=3.4*pixelRatio;
      }
    `,
    fragmentShader: `
      varying float opacity;
      void main(){
        float r=length(gl_PointCoord-.5);
        float alpha=opacity*(1.0-smoothstep(.30,.50,r));
        if(alpha<.003) discard;
        gl_FragColor=vec4(1.0,1.0,1.0,alpha);
        #include <colorspace_fragment>
      }
    `,
  });
  const points = new THREE.Points(geometry, material);
  points.renderOrder = 1;
  return points;
}
