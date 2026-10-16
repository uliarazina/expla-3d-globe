# expla — A world of possibilities

Responsive React + Vite landing page with a Three.js globe, real country polygons, subtle lighting, pointer/touch rotation, pause control, keyboard arrows, and automatic reduced-motion support. No country labels are rendered.

## Develop

Requires Node.js 20.19+ or 22.12+ (verified on Node.js 24).

```sh
npm ci --cache /tmp/expla-npm-cache
npm run dev -- --port 5173
npm run build
```

The development server binds to all interfaces. `npm run preview` serves the production build. No credentials or runtime external services are required; geography is served locally. Contact links are sample `hello@expla.com` mail links and should be confirmed before launch.

## Browser validation

With the development server running on port 5173, run `npm run test:smoke`. The test uses system Chromium at `/usr/bin/chromium` when available; otherwise install Playwright Chromium with `npx playwright install chromium`, or set `CHROMIUM_PATH`. It checks actual WebGL rendering, animation, pause, mouse dragging, reduced motion, mobile horizontal overflow, country exclusions, and browser exceptions. Screenshots are saved to `/tmp/expla-desktop.png` and `/tmp/expla-mobile.png`.

## Geographic data

`public/data/countries.geojson` is derived from [datasets/geo-countries](https://github.com/datasets/geo-countries), sourced from Natural Earth 1:10m Admin-0 geography, downloaded 2026-10-16. The source is released under [ODC Public Domain Dedication and License 1.0](https://opendatacommons.org/licenses/pddl/1.0/); Natural Earth data is public domain. Coordinates were rounded to three decimals and neighboring vertices closer than 0.09 degrees were thinned for browser delivery.

Features with ISO alpha-3 codes `RUS` and `BLR` were removed from the shipped dataset and are filtered again at render time. They receive no fill or outlines. A single uninterrupted sphere remains underneath all geography. Adjacent included countries retain their own complete borders. Ring winding is normalized for d3-geo before rasterizing the country texture. The texture is applied to a true 3D sphere, with no animation reset between revolutions.

Reduced-motion preference disables automatic rotation; manual rotation remains available. The renderer caps device pixel ratio at 2 and releases WebGL resources when unmounted. Vite may report a non-fatal large-chunk advisory due to the Three.js renderer.
