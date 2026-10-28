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
// Only a few front-facing countries emit a pulse at once. Surface coordinates
// stay fixed; screen-space point sprites keep every ring circular during rotation.
export function createGlobeMarkers() {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(markerLocations.flatMap(([, lat, lon]) => markerPosition(lat, lon)), 3));
  geometry.setAttribute('startTime', new THREE.Float32BufferAttribute(markerLocations.map(() => -100), 1).setUsage(THREE.DynamicDrawUsage));
  const material = new THREE.ShaderMaterial({
    transparent: true, depthTest: false, depthWrite: false,
    uniforms: {
      time: { value: 0 }, pixelRatio: { value: 1 }, duration: { value: 1.5 },
      diameter: { value: 32 }, dotDiameter: { value: 5 }, lineWidth: { value: 1.4 },
      reducedMotion: { value: 0 }, color: { value: new THREE.Color('#FFFFFF') },
      canvasSize: { value: new THREE.Vector2(1, 1) }, sphereRadius: { value: 1 },
    },
    vertexShader: `
      uniform float time, pixelRatio, duration, diameter, reducedMotion;
      attribute float startTime;
      varying float age, visibility;
      void main(){
        vec4 view=modelViewMatrix*vec4(position,1.0);
        float facing=dot(normalize(normalMatrix*normalize(position)),normalize(-view.xyz));
        visibility=smoothstep(0.0,.10,facing);
        age=time-startTime;
        // Inactive/back-facing sprites are clipped before rasterisation.
        if(visibility<=0.0 || (reducedMotion<.5 && (age<0.0 || age>=duration))){
          gl_Position=vec4(2.0,2.0,2.0,1.0); gl_PointSize=1.0; return;
        }
        gl_Position=projectionMatrix*view;
        gl_PointSize=(diameter+2.0)*pixelRatio;
      }
    `,
    fragmentShader: `
      uniform float duration, diameter, dotDiameter, lineWidth, reducedMotion, sphereRadius;
      uniform vec2 canvasSize;
      uniform vec3 color;
      varying float age, visibility;
      void main(){
        // Explicit sphere clipping replaces depth testing for the flat sprites:
        // rings can sit over curved land without half the outline being buried.
        float silhouette=length(gl_FragCoord.xy-canvasSize*.5);
        if(silhouette>=sphereRadius || visibility<=0.0) discard;
        float r=length(gl_PointCoord-.5)*(diameter+2.0);
        float dot=1.0-smoothstep(dotDiameter*.5-.4,dotDiameter*.5+.4,r);
        float alpha;
        if(reducedMotion>.5){
          alpha=dot*.65;
        }else{
          if(age<0.0 || age>=duration) discard;
          float progress=age/duration;
          float enter=smoothstep(0.0,.10,age);
          float center=enter*(1.0-smoothstep(.48,.92,progress));
          float eased=1.0-pow(1.0-progress,3.0);
          float ringRadius=mix(dotDiameter*.5,diameter*.5,eased);
          float ring=1.0-smoothstep(lineWidth*.5-.3,lineWidth*.5+.3,abs(r-ringRadius));
          float ringAlpha=enter*pow(1.0-progress,1.35)*.85;
          float glow=exp(-r*r/(dotDiameter*dotDiameter*.6))*.12*center;
          alpha=max(dot*center*.95,ring*ringAlpha)+glow;
        }
        alpha*=visibility*(1.0-smoothstep(sphereRadius-1.0,sphereRadius,silhouette));
        if(alpha<.003) discard;
        gl_FragColor=vec4(color,min(alpha,1.0));
        #include <colorspace_fragment>
      }
    `,
  });
  const points = new THREE.Points(geometry, material);
  points.renderOrder = 1;
  points.userData.pulses = { next: 0, cursor: 0, matrix: new THREE.Matrix4(), normal: new THREE.Matrix3(), position: new THREE.Vector3(), direction: new THREE.Vector3(), eye: new THREE.Vector3() };
  return points;
}

export function updateGlobeMarkers(points, { time, camera, mobile = false, reducedMotion = false }) {
  const uniforms = points.material.uniforms;
  uniforms.time.value = time;
  uniforms.duration.value = mobile ? 1.35 : 1.5;
  uniforms.diameter.value = mobile ? 26 : 32;
  uniforms.dotDiameter.value = mobile ? 4 : 5;
  uniforms.lineWidth.value = mobile ? 1.2 : 1.4;
  uniforms.reducedMotion.value = reducedMotion ? 1 : 0;
  if (reducedMotion) return;
  const state = points.userData.pulses;
  if (time < state.next) return;
  state.next = time + (mobile ? .85 : .55);
  points.updateWorldMatrix(true, false); camera.updateWorldMatrix(true, false);
  state.matrix.multiplyMatrices(camera.matrixWorldInverse, points.matrixWorld);
  state.normal.getNormalMatrix(state.matrix);
  const positions = points.geometry.attributes.position, starts = points.geometry.attributes.startTime;
  for (let offset = 0; offset < positions.count; offset++) {
    const index = (state.cursor + offset) % positions.count;
    if (time - starts.getX(index) < uniforms.duration.value + .8) continue;
    state.position.fromBufferAttribute(positions, index).applyMatrix4(state.matrix);
    state.direction.fromBufferAttribute(positions, index).normalize().applyMatrix3(state.normal).normalize();
    state.eye.copy(state.position).negate().normalize();
    if (state.direction.dot(state.eye) < .04) continue;
    starts.setX(index, time); starts.needsUpdate = true;
    state.cursor = (index + 1) % positions.count;
    break;
  }
}

export function resizeGlobeMarkers(points, { width, height, pixelRatio, camera }) {
  const uniforms = points.material.uniforms;
  uniforms.pixelRatio.value = pixelRatio;
  uniforms.canvasSize.value.set(width * pixelRatio, height * pixelRatio);
  // Exact projected silhouette of a unit sphere centred on the camera axis.
  uniforms.sphereRadius.value = height * pixelRatio * .5 * camera.projectionMatrix.elements[5]
    / Math.sqrt(camera.position.lengthSq() - 1);
}
