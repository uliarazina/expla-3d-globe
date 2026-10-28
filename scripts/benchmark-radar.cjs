// Paired real-time samples with no screenshots/video in flight. Software-WebGL
// cloud load can vary; this is an observation, not a hardware FPS guarantee.
const { writeFileSync } = require('node:fs');
const { launch, baseURL } = require('./browser.cjs');
(async () => {
  const browser = await launch();
  try {
    const page = await browser.newPage({ viewport: { width: 800, height: 800 }, reducedMotion: 'no-preference' });
    await page.goto(`${baseURL}/scripts/fixtures/globe.html`);
    const samples = [];
    for (const showMarkers of [false, true, false, true]) {
      await page.waitForFunction(() => Boolean(window.renderGlobe));
      await page.evaluate(showMarkers => { window.__samples = []; window.renderGlobe({ showMarkers }); }, showMarkers);
      await page.waitForFunction(count => window.__samples.length >= 3 && window.__samples.at(-1).markerCount === count, showMarkers ? 22 : 0);
      await page.evaluate(() => { window.__samples = []; });
      await page.waitForTimeout(3500);
      samples.push(await page.evaluate(showMarkers => {
        const frames = window.__samples;
        const deltas = frames.slice(1).map((f,i) => f.timestamp-frames[i].timestamp).sort((a,b)=>a-b);
        return { showMarkers, frames: frames.length, fps: 1000*(frames.length-1)/(frames.at(-1).timestamp-frames[0].timestamp), p95FrameMs: deltas[Math.floor(deltas.length*.95)] };
      }, showMarkers));
    }
    const renderer = await page.evaluate(() => {
      const gl = document.querySelector('canvas').getContext('webgl2'), extension = gl.getExtension('WEBGL_debug_renderer_info');
      return extension ? gl.getParameter(extension.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);
    });
    const average = value => samples.filter(s=>s.showMarkers===value).reduce((n,s)=>n+s.fps,0)/2;
    const result = { renderer, samples, baselineFps: average(false), radarFps: average(true), note: 'Paired 3.5-second real-time samples, 560px component at DPR 1, no screenshot capture. Baseline is the same globe with its marker overlay disabled. Cloud software-renderer timing is variable.' };
    writeFileSync('previews/radar-performance.json', JSON.stringify(result,null,2)+'\n'); console.log(result);
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode=1; });
