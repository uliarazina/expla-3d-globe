# expla website & globe

A standalone React + Three.js globe with a transparent background, bright green raised country polygons and a softly lit black sphere, a continuous 60-second rotation, horizontal-only drag/touch/keyboard interaction, and reduced-motion support. The default page now reproduces the full website screenshot. Use `?view=globe` for the isolated component preview. The reusable globe itself still contains no labels or website UI.

- **Website and publication:** [Full-site guide](docs/WEBSITE.md)
- **Integrate:** [Developer handoff](docs/INTEGRATION.md)
- **Component:** [Globe.jsx](src/components/Globe.jsx), [Globe.css](src/components/Globe.css), and [globeMaterial.js](src/components/globeMaterial.js)
- **Video:** [10-second MP4, 30 FPS](previews/expla-globe-30fps.mp4)
- **Measurements and recording details:** [Preview notes](previews/README.md)

## Develop and verify

Node.js 20.19+ or 22.12+ (verified on Node.js 24):

```sh
npm ci --cache /tmp/expla-npm-cache
npm run dev -- --port 5173
# In a second terminal:
npm run build
npm run test:site
npm run test:animations
npm run test:interactions
npm run test:design
npm run test:quality
npm run test:geography
npm run test:smoke
```

The browser test uses `/usr/bin/chromium` if available. Otherwise run `npx playwright install chromium` or set `CHROMIUM_PATH`. `BASE_URL` overrides the default development-server URL. Tests verify actual browser animation timing, forced slow frames, multiple angle wrap boundaries, pause, mouse and keyboard interaction, reduced motion changes, transparent pixels, mobile layout, excluded countries, cleanup, and fetch errors. Performance samples are collected without screenshot capture; results are written to `/tmp/expla-globe-performance.json`. FPS depends on hardware and is reported rather than asserted.

`npm run record:preview` regenerates the MP4 using Chromium and a system `ffmpeg` executable. See [recording methodology](previews/README.md). `npm run preview` serves the production build; the test fixture itself is development-only. Vite reports a non-fatal large-chunk advisory for the renderer bundle.

## Geographic data and license

`public/data/countries.geojson` derives from [datasets/geo-countries](https://github.com/datasets/geo-countries), sourced from Natural Earth 1:10m Admin-0 geography and downloaded 2026-10-16. The dataset uses [ODC Public Domain Dedication and License 1.0](https://opendatacommons.org/licenses/pddl/1.0/); underlying Natural Earth data is public domain. Coordinates were rounded to three decimals, and adjacent vertices closer than 0.09 degrees were thinned for delivery.

Features with ISO alpha-3 codes `RUS` and `BLR` are absent from the shipped dataset and filtered again when rendering. They have no country fill or outlines. The sphere beneath remains uninterrupted. Included neighbors retain their own complete boundaries. No country labels are drawn. Ring winding is normalized for d3-geo before texture generation. All geography is served locally, without API keys or third-party runtime services.

The appearance follows the globe PNGs supplied in chat on 2026-10-26. The globe uses the user-provided base colors `#03FA7F` (land) and `#212121` (sphere); lighting modifies the final pixels. The original uploaded logo SVG is installed; the supplied e-Ukraine fonts are self-hosted. The emerald masthead uses the original uploaded Vector.png asset with subtle shader animation and stronger pointer distortion. The surrounding ring, website content, and statistics live in `src/App.jsx`, separate from the globe component.

Ukraine includes Crimea and Sevastopol; [geography notes](docs/GEOGRAPHY.md) explain the corrected source assignment and regression checks.

The globe uses 4K atlases, up to 2× Retina rendering, and a smooth spherical silhouette. Shader-based coast relief avoids displaced-vertex spikes. See the [high-resolution transparent globe](previews/expla-globe-transparent.png).
