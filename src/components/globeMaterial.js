import * as THREE from 'three';

// One-pass illustration shader. Broad studio lighting is evaluated per vertex;
// the fragment stage only combines two prebaked atlases and a narrow coast bevel.
export function createGlobeMaterial({ colorMap, reliefMap, relief, rimStrength }) {
  return new THREE.ShaderMaterial({
    uniforms: {
      colorMap: { value: colorMap }, reliefMap: { value: reliefMap },
      relief: { value: relief }, rimStrength: { value: rimStrength },
    },
    vertexShader: `
      uniform float rimStrength;
      varying vec2 globeUv;
      varying vec3 lighting;
      void main() {
        globeUv = uv;
        vec4 view = modelViewMatrix * vec4(position, 1.0);
        vec3 n = normalize(normalMatrix * normal);
        vec3 eye = normalize(-view.xyz);
        vec3 light = normalize(vec3(-0.65, 0.9, 1.3));
        float diffuse = max(dot(n, light), 0.0);
        float reflection = max(dot(reflect(-light, n), eye), 0.0);
        // Layer a broad studio softbox with a tighter clearcoat reflection.
        float specular = .7 * pow(reflection, 14.0) + .3 * pow(reflection, 70.0);
        float edge = 1.0 - max(dot(n, eye), 0.0);
        float rimLight = max(dot(n, normalize(vec3(-0.6, 0.85, 0.0))), 0.0);
        float rim = edge * edge * edge * edge * rimStrength * (0.12 + 0.88 * rimLight);
        lighting = vec3(diffuse, specular, rim);
        gl_Position = projectionMatrix * view;
      }
    `,
    fragmentShader: `
      uniform sampler2D colorMap;
      uniform sampler2D reliefMap;
      uniform float relief;
      varying vec2 globeUv;
      varying vec3 lighting;
      void main() {
        // R: land coverage, GB: coast gradients, A: nearby-land shadow mask.
        vec4 coast = texture2D(reliefMap, globeUv);
        float land = coast.r;
        vec2 slope = coast.gb * 2.0 - 1.0;
        float bevel = min(abs(slope.x) + abs(slope.y), 1.0);
        float bevelLight = clamp(-slope.x * 0.6 + slope.y * 0.8, -1.0, 1.0);
        vec3 base = texture2D(colorMap, globeUv).rgb;
        vec3 color = base * mix(0.25 + 0.75 * lighting.x, 0.68 + 0.32 * lighting.x, land);
        color *= 1.0 - bevel * land * min(relief * 28.0, 0.65);
        color += vec3(0.06) * max(bevelLight, 0.0) * land * min(relief * 85.0, 1.0);
        color += vec3(lighting.y * mix(0.20, 0.075, land));
        float coastShadow = (1.0 - land) * coast.a;
        color *= 1.0 - coastShadow * min(relief * 55.0, 0.85);
        color += vec3(lighting.z) * (1.0 - land * 0.88);
        gl_FragColor = vec4(color, 1.0);
        #include <colorspace_fragment>
      }
    `,
  });
}
