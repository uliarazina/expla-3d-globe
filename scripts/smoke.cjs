const assert = require('node:assert/strict');
const fs = require('node:fs');
const { launch, baseURL } = require('./browser.cjs');

(async () => {
  const browser = await launch();
  try {
    const page = await browser.newPage({ viewport: { width: 800, height: 800 }, reducedMotion: 'no-preference' });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => {
      if (message.type() === 'error' && /THREE.WebGLProgram|VALIDATE_STATUS|shader error/i.test(message.text())) errors.push(message.text());
    });
    await page.goto(`${baseURL}/?view=globe`);
    await page.waitForSelector('canvas');
    await page.waitForTimeout(1200);
    // Measure actual rendered frames, without screenshots or video capture in flight.
    await page.evaluate(() => { window.__globeSamples = []; });
    await page.waitForTimeout(5000);
    const performance = await page.evaluate(() => {
      const frames = window.__globeSamples;
      window.__globeSamples = null;
      const deltas = frames.slice(1).map((f, i) => f.timestamp - frames[i].timestamp);
      const sorted = deltas.toSorted((a, b) => a - b);
      const gl = document.querySelector('canvas').getContext('webgl2');
      const debug = gl.getExtension('WEBGL_debug_renderer_info');
      return { fps: 1000 / (deltas.reduce((a, b) => a + b, 0) / deltas.length),
        p95FrameMs: sorted[Math.floor(sorted.length * 0.95)],
        frames: frames.length,
        rotationPeriod: 2 * Math.PI * ((frames.at(-1).timestamp - frames[0].timestamp) / 1000) / (frames.at(-1).rotation - frames[0].rotation),
        drawCalls: frames.at(-1).drawCalls, triangles: frames.at(-1).triangles,
        renderer: debug ? gl.getParameter(debug.UNMASKED_RENDERER_WEBGL) : 'unknown' };
    });
    assert(Math.abs(performance.rotationPeriod - 20) < 0.01, '20-second rotation period');
    assert.equal(performance.drawCalls, 1);
    fs.writeFileSync('/tmp/expla-globe-performance.json', JSON.stringify(performance, null, 2));
    await page.screenshot({ path: '/tmp/expla-globe-desktop.png' });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForTimeout(300);
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'mobile overflow');
    await page.screenshot({ path: '/tmp/expla-globe-mobile.png' });

    await page.goto(`${baseURL}/scripts/fixtures/globe.html`);
    await page.waitForSelector('canvas');
    await page.evaluate(() => window.renderGlobe({ paused: true }));
    await page.waitForTimeout(150);
    const canvas = page.locator('canvas');
    const stopped = await canvas.screenshot({ omitBackground: true });
    const alpha = await page.evaluate(async base64 => {
      const image = new Image(); image.src = `data:image/png;base64,${base64}`; await image.decode();
      const canvas = document.createElement('canvas'); canvas.width = image.width; canvas.height = image.height;
      const context = canvas.getContext('2d'); context.drawImage(image, 0, 0);
      return [context.getImageData(0, 0, 1, 1).data[3], context.getImageData(image.width / 2, image.height / 2, 1, 1).data[3]];
    }, stopped.toString('base64'));
    assert.deepEqual(alpha, [0, 255], 'transparent outside, solid sphere at center');
    await page.waitForTimeout(200);
    assert(stopped.equals(await canvas.screenshot({ omitBackground: true })), 'pause is stable');
    assert(await page.evaluate(() => document.querySelector('canvas').getContext('webgl2').getContextAttributes().alpha), 'transparent WebGL context');
    assert.equal(await page.locator('.expla-globe').evaluate(el => getComputedStyle(el).backgroundColor), 'rgba(0, 0, 0, 0)');
    const bounds = await canvas.boundingBox();
    await page.mouse.move(bounds.x + bounds.width / 2, bounds.y + bounds.height / 2);
    const beforeVertical = await page.evaluate(() => window.__samples.at(-1));
    await page.mouse.down();
    await page.mouse.move(bounds.x + bounds.width / 2, bounds.y + bounds.height / 2 + 90, { steps: 8 });
    await page.mouse.up(); await page.waitForTimeout(100);
    const afterVertical = await page.evaluate(() => window.__samples.at(-1));
    assert.equal(afterVertical.rotation, beforeVertical.rotation, 'vertical drag never rotates the globe');
    assert.equal(afterVertical.axisTilt, beforeVertical.axisTilt, 'vertical drag never tilts the axis');
    await page.mouse.move(bounds.x + bounds.width / 2, bounds.y + bounds.height / 2);
    await page.mouse.down();
    await page.mouse.move(bounds.x + bounds.width / 2 + 100, bounds.y + bounds.height / 2 + 30, { steps: 10 });
    await page.mouse.up(); await page.waitForTimeout(150);
    assert(!stopped.equals(await canvas.screenshot()), 'horizontal drag changes the rendered geography');
    assert.equal((await page.evaluate(() => window.__samples.at(-1))).axisTilt, beforeVertical.axisTilt, 'horizontal drag preserves axis tilt');
    await canvas.focus();const beforeKey = await canvas.screenshot();
    await page.keyboard.press('ArrowRight'); await page.waitForTimeout(150);
    assert(!beforeKey.equals(await canvas.screenshot()), 'keyboard rotation');

    // Exercise multiple revolutions quickly and force a slow frame: no angle reset or delta clamp.
    await page.evaluate(() => { window.renderGlobe({ paused: false, rotationPeriod: 0.25 }); window.__samples = []; });
    await page.waitForTimeout(1200);
    await page.evaluate(() => { const end = performance.now() + 200; while (performance.now() < end) {} });
    await page.waitForTimeout(150);
    const samples = await page.evaluate(() => window.__samples);
    assert(samples.length > 5);
    assert(samples.some(s => s.delta > 0.15), 'slow-frame timing exercised');
    for (let i = 1; i < samples.length; i++) {
      const expected = 2 * Math.PI / 0.25 * samples[i].delta;
      assert(Math.abs(samples[i].rotation - samples[i - 1].rotation - expected) < 1e-8, 'continuous delta-based angle, including wrap boundaries');
    }
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.waitForTimeout(150);
    const reduced = await canvas.screenshot();
    await page.waitForTimeout(200);
    assert(reduced.equals(await canvas.screenshot()), 'reduced motion stops auto rotation');
    await page.emulateMedia({ reducedMotion: 'no-preference' });
    await page.waitForTimeout(200);
    assert(!reduced.equals(await canvas.screenshot()), 'rotation resumes on preference change');
    const data = await page.evaluate(() => fetch('/data/countries.geojson').then(r => r.json()));
    assert(data.features.length > 200 && data.features.every(f => !['RUS', 'BLR'].includes(f.properties.iso_a3)));
    await page.evaluate(() => window.unmountGlobe());
    await page.waitForTimeout(100);assert.equal(await canvas.count(), 0);
    await page.evaluate(() => window.renderGlobe({ dataUrl: '/missing-geography.json' }));
    await page.getByRole('alert').waitFor();
    assert.deepEqual(errors, []);
    console.log('PASS: period, unwrapped rotation, slow frames, pause, drag, keyboard, transparency, reduced motion, mobile, country exclusions, unmount, load error.');
    console.log(JSON.stringify(performance, null, 2));
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
