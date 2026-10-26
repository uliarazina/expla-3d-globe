# Globe preview and measured performance

Primary animation reference: **[expla-globe-30fps.mp4](expla-globe-30fps.mp4)** — 10 seconds, 640×640, H.264, 30 FPS, 300 distinct browser-rendered frames. The MP4 uses a dark preview background; the reusable component itself is transparent. Rotation period is 40 seconds, so the video shows a quarter revolution. This 10-second excerpt is not intended to loop seamlessly; the component itself has continuous rotation.

## Why the old preview was jerky

- The old OrbitControls setting (`autoRotateSpeed = 0.32`) corresponds to approximately 187.5 seconds per revolution, not 20 seconds.
- The old recording captured only 25 unique screenshots in eight seconds (about 3 FPS). Encoding that sequence into a higher-FPS video duplicated frames and did not make motion smoother. The old GIF is removed to avoid using it as a current reference.
- This machine uses Chromium with ANGLE/SwiftShader software WebGL. The original scene measured approximately 38 FPS. Its animation also clipped frame deltas to 50 ms, making rotation slower when rendering fell below 20 FPS.

The replacement uses actual rAF time with no frame-delta clipping, one draw call, a prebaked coastline atlas, vertex-based studio lighting, and a configurable pixel-density cap. It targets the display's refresh rate when the device supports it. Software rendering remains a limitation; a constant-rate recording is not proof of real-time 60 FPS.

## Live browser measurements

[`performance.json`](performance.json) records the latest smoke-test sample, collected for five seconds with **no screenshot or video capture running**. It includes actual rendered-frame FPS, p95 frame interval, verified rotation period, renderer identity, draw calls, and triangle count. The PNG-based relief shader measures approximately 11 FPS in the latest software-rendered cloud browser sample at an 800×800 viewport, DPR 1, and a 640×640 component. This is below the 60 FPS target, which has not been verified on hardware WebGL here. A prior simpler unlit version measured around 40 FPS on an earlier machine session; those observations are not a controlled GPU benchmark.

Run `npm run test:smoke` with the Vite server running to reproduce the test. Browser-performance results may vary with concurrent cloud load. Measurements are reported honestly rather than requiring unsupported 60 FPS on a software renderer. Test cases also force a long frame and validate the exact rotation increment, run through multiple revolution boundaries, and test motion preferences and interaction.

## Reproduce the MP4

With Chromium, ffmpeg, and the Vite server available:

```sh
npm run record:preview
ffprobe -v error -select_streams v:0 -show_entries stream=r_frame_rate,nb_frames,width,height:format=duration previews/expla-globe-30fps.mp4
```

To avoid capture overhead, `scripts/record-preview.cjs` drives the **actual browser component's requestAnimationFrame callbacks** with exact 30 Hz timestamps while taking screenshots offline. Each frame is rendered independently in Chromium/WebGL; there is no frame interpolation or duplication. This records ten seconds of animation time and can take longer than ten wall-clock seconds to generate. The script verifies all 300 source frames are distinct and checks the effective revolution period. `recording.json` records the method and output metadata. Real-time animation performance is verified separately, never inferred from this offline recording.

## Current visual reference

The appearance was updated from the supplied expla website and isolated-globe PNGs on 2026-10-26. Bright green raised land, a nearly black sphere, a soft gray highlight, and upper-left rim lighting replace the older flat green material. Base colors are now the user-supplied `#03FA7F` / `#212121`; lighting varies the visible pixels. The progress ring and all website UI remain outside the component. See [the transparent PNG](expla-globe-transparent.png) for a still of the new component. RUS and BLR remain absent from both color and relief atlases.

The latest preview uses horizontal-only interaction and corrected Ukraine geometry including Crimea. [Ukraine outline](ukraine-boundary.svg) is generated directly from the shipped geographic feature. The default turn is now 40 seconds, slowed at the user’s request.

The current globe has softer rim/specular highlights. The website previews now include the original uploaded SVG logo. [Mobile popup](expla-popup-mobile.png) and [desktop popup](expla-popup-desktop.png) show the layout based on the supplied mobile example, including the direction selector and white benefit cards.

For image sharpness, use the full-size [Retina PNG](expla-globe-transparent.png); the MP4 is a smaller 640×640 motion reference. The latest globe uses a regular spherical mesh with shader coast relief, 4K atlases and a 2× pixel-density cap. The separate quality test measures its rendered alpha silhouette rather than inferring quality from a configuration setting.
