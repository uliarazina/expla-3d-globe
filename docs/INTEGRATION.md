# Integrating the globe

## React website

Copy `src/components/Globe.jsx`, `src/components/Globe.css`, and `src/components/globeMaterial.js` together into your application's component directory. Copy `public/data/countries.geojson` into your application's public/static assets. Preserve the geographic provenance and license information from this repository's README.

Install the runtime dependencies with your project's package manager:

```sh
npm install react react-dom three d3-geo
```

This repository verifies React 19, Three.js 0.180, and d3-geo 3; exact resolved versions are recorded in `package-lock.json`. The component uses standard React hooks and a browser WebGL renderer. Vite and Playwright are development tools and are not component runtime dependencies. No React Three Fiber dependency is required.

```jsx
import Globe from './components/Globe.jsx';

export default function CompanySection() {
  return (
    <div style={{ width: '100%', maxWidth: 560, aspectRatio: '1' }}>
      <Globe
        dataUrl="/data/countries.geojson"
        rotationPeriod={40}
        landColor="#03FA7F"
        oceanColor="#212121"
        borderColor="#02e573"
      />
    </div>
  );
}
```

The parent supplies the dimensions and background. The component's canvas is transparent outside the sphere, while the sphere itself is solid. It can sit over a company section's existing color, image, or gradient. The component imports its own narrowly scoped stylesheet; do not copy `src/style.css` or `src/main.jsx`. Those are the full website layer; the isolated preview is available at `?view=globe`. The production `dist/` folder is a demo build, not an npm component package.

For a site hosted below a URL prefix, supply the correct asset path, e.g. `dataUrl="/company/assets/countries.geojson"`. Vite consumers can use ``dataUrl={`${import.meta.env.BASE_URL}data/countries.geojson`}``. A cross-origin data URL must permit CORS. A missing asset or unavailable WebGL produces an accessible fallback message. The component performs no browser operations until it mounts; frameworks such as Next.js should import it through a client component (`'use client'`).

## Existing non-React website

A bundled React island can mount the same component in an existing DOM element. Your asset build must support JSX, CSS imports, and npm dependencies:

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import Globe from './components/Globe.jsx';

const root = createRoot(document.getElementById('company-globe'));
root.render(<Globe dataUrl="/assets/countries.geojson" />);
// When that section is removed:
// root.unmount();
```

```html
<div id="company-globe" style="width:100%;max-width:560px;aspect-ratio:1"></div>
```

No global Three.js scripts, external APIs, or credentials are needed. Mount once per globe, and unmount when your application's navigation removes the section.

## Props

| Prop | Default | Purpose |
| --- | --- | --- |
| `dataUrl` | `/data/countries.geojson` | GeoJSON asset URL. Use the supplied, filtered file. |
| `rotationPeriod` | `40` | Seconds per revolution. Positive finite values animate; zero or negative values stop automatic rotation. |
| `paused` | `false` | Stop automatic rotation without blocking manual interaction. Can be controlled by the host page. |
| `interactive` | `true` | Enable horizontal mouse/touch turns and left/right arrow keys. Vertical gestures scroll the page without tilting the globe; the camera never orbits. |
| `landColor` | `#03FA7F` | Polygon fill. |
| `oceanColor` | `#212121` | Solid sphere color underneath polygons, including excluded areas. |
| `borderColor` | `#02e573` | Included country outlines. |
| `relief` | `0.008` | Shader coastline bevel/shadow strength, clamped to 0–0.03. `0` removes the relief illusion. Vertices stay on the sphere to prevent spikes. |
| `rimStrength` | `0.025` | Soft white edge illumination, clamped to 0–1. `0` removes the rim. |
| `maxPixelRatio` | `2` | Upper device-pixel-ratio limit. Use `1` to reduce fill cost on constrained devices. |
| `textureWidth` | `4096` | Atlas width, clamped to 512–4096. The height is half the width. Higher values improve close-up boundaries at extra memory/startup cost. |
| `className`, `style` | none | Apply host layout styles to the wrapper. |
| `onReady` | none | Called after scene initialization. |
| `onFrame` | none | Optional diagnostics callback with `timestamp` (rAF milliseconds), `delta`/`elapsed` (seconds), unwrapped `rotation` and fixed `axisTilt` (radians), `drawCalls`, `triangles`, `textureWidth`, and `pixelRatio`. Avoid setting React state every frame. |

Changing pause, speed, or callbacks does not recreate the renderer. Changing geography, colors, relief, rim strength, quality, or interactivity recreates the scene and starts its orientation again. Treat those as initialization options when continuity matters.

## Motion and performance

The animation uses `requestAnimationFrame` timestamps and `2π / rotationPeriod × deltaSeconds` to advance the sphere, without OrbitControls. The angle is never reset at the end of a revolution, and elapsed time is not clipped on slow frames. Holding the pointer pauses automatic rotation; it resumes on release without a catch-up jump. Horizontal manual dragging remains available while held. Pointer and keyboard input add an angle to the globe itself; they never move the camera or change its fixed axis tilt. Vertical dragging does nothing to orientation, and vertical touch gestures can scroll the page. There is no inertia, so paused and reduced-motion views settle immediately.

The browser schedules rendering at its available refresh rate; the component imposes no 30/60 FPS cap. Hardware-supported 60 FPS is the target, not a guarantee on software WebGL or busy mobile devices. A hidden tab or offscreen globe stops rendering and resets its time baseline on return, avoiding a catch-up jump. `prefers-reduced-motion: reduce` overrides automatic rotation, with live preference changes supported. Static views render on demand during resize and interaction.

The scene uses one shader-driven sphere, one draw call, 24,320 triangles, and two one-time 4096×2048 atlases (capped by the GPU texture limit). The PNG reference is interpreted as bright green raised land over a dark, softly highlighted sphere. Broad lighting is calculated per vertex; coast bevels and nearby-land shadows are baked on the CPU rather than using shadow maps, per-frame geographic processing, or expensive per-pixel lighting. The 128×96 geometry is a perfect sphere; coast relief is shaded rather than displacing sparse vertices, preventing the jagged silhouette. Both atlases use mip filtering; the color atlas uses capped anisotropic filtering for oblique coasts. Atlas preprocessing yields in small batches to avoid freezing the first-screen animation. The fragment shader combines two texture samples. Pixel density is capped, with no post-processing or per-frame React updates. Included country outlines are subtle green strokes baked into the color atlas. ResizeObserver keeps the sphere fitted to the parent. Geometry, materials, textures, observers, pointer/keyboard listeners, requests, and the renderer are released on unmount.

The demo's `window.__globeFrame` / `window.__globeSamples` instrumentation belongs only to `src/main.jsx`; the component itself creates no globals. See `previews/performance.json` for measurements from this cloud browser, which uses SwiftShader software rendering rather than a hardware GPU.

## Reference fidelity

The current appearance is reconstructed from the two PNG images supplied in chat on 2026-10-26, not from Figma layer metadata. The first contains the website context; the second isolates the globe. Land is saturated green, the ocean is nearly black with a broad soft highlight, and coastlines have a slight raised bevel. A directional rim lights the upper-left silhouette. The initial view frames the Atlantic, Europe, Africa, and the Americas. The surrounding progress ring and all page typography/statistics are intentionally omitted.

Land `#03FA7F` and ocean `#212121` are the exact base-color values supplied by the user; border `#02e573` is a subtle derived outline. These values are not retrieved Figma design tokens. Lighting changes displayed pixel colors. Exact design tokens can replace these props later. Real GeoJSON replaces the reference's stylized geography, including the explicit RUS/BLR exclusions; those differences are intentional.

Ukraine now includes Crimea and Sevastopol; see [geographic provenance](GEOGRAPHY.md). The stape.io reference could not be accessed (HTTP 403), so its rotation period has not been measured. The current default is 40 seconds per turn and can be changed via `rotationPeriod`.

Globe lighting was softened at the user’s request: the default rim is 0.025, the ocean specular coefficient is 0.008, the land specular coefficient is 0.002, and the coast highlight coefficient is 0.012. Base land/ocean colors and geography are unchanged.

Quality defaults are now 4K atlases and up to 2× device pixel density. On constrained devices or when many globes are embedded, use `textureWidth={2048}` and `maxPixelRatio={1}` to reduce texture memory/fill cost. `npm run test:quality` verifies the actual Retina drawing buffer and texture dimensions, and measures the rendered circular alpha contour to catch spiky geometry regressions. It also captures the high-resolution transparent PNG.
