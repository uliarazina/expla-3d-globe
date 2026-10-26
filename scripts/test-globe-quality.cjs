const assert = require('node:assert/strict');
const { launch, baseURL } = require('./browser.cjs');
(async () => {
  const browser = await launch();
  try {
    const page = await browser.newPage({ viewport: { width: 800, height: 800 }, deviceScaleFactor: 2, reducedMotion: 'reduce' });
    const errors = []; page.on('pageerror', e => errors.push(e.message));
    page.on('console', m => { if (m.type() === 'error' && /THREE.WebGLProgram|shader error|VALIDATE_STATUS/i.test(m.text())) errors.push(m.text()); });
    const preview = new URL(baseURL); preview.searchParams.set('view', 'globe');
    await page.goto(preview.href);
    await page.waitForFunction(() => Boolean(window.__globeFrame));
    await page.addStyleTag({ content: 'html,body{background:transparent!important}' });
    const canvas = page.locator('canvas');
    const quality = await canvas.evaluate(e => {
      const gl = e.getContext('webgl2');
      return { width: e.width, cssWidth: e.getBoundingClientRect().width,
        maxTexture: gl.getParameter(gl.MAX_TEXTURE_SIZE), frame: window.__globeFrame };
    });
    assert(quality.width >= quality.cssWidth * 1.99, 'Retina gets an actual 2x drawing buffer');
    assert.equal(quality.frame.textureWidth, Math.min(4096, quality.maxTexture), 'full-resolution atlas fits the device');
    const image = await canvas.screenshot({ omitBackground: true, path: 'previews/expla-globe-transparent.png' });
    const contour = await page.evaluate(async base64 => {
      const image = new Image(); image.src = `data:image/png;base64,${base64}`; await image.decode();
      const c = document.createElement('canvas'); c.width = image.width; c.height = image.height;
      const ctx = c.getContext('2d'); ctx.drawImage(image, 0, 0);
      const pixels = ctx.getImageData(0, 0, c.width, c.height).data;
      let minX = c.width, maxX = 0, minY = c.height, maxY = 0;
      for (let y = 0; y < c.height; y++) for (let x = 0; x < c.width; x++) {
        if (pixels[(y * c.width + x) * 4 + 3] >= 128) {
          minX = Math.min(minX, x); maxX = Math.max(maxX, x);
          minY = Math.min(minY, y); maxY = Math.max(maxY, y);
        }
      }
      const centerX = (minX + maxX) / 2, centerY = (minY + maxY) / 2;
      const approximateRadius = (maxX - minX + maxY - minY) / 4;
      const alpha = (x, y) => {
        const a = Math.floor(x), b = Math.floor(y), dx = x - a, dy = y - b;
        const at = (xx, yy) => pixels[(yy * c.width + xx) * 4 + 3] || 0;
        return at(a, b) * (1 - dx) * (1 - dy) + at(a + 1, b) * dx * (1 - dy)
          + at(a, b + 1) * (1 - dx) * dy + at(a + 1, b + 1) * dx * dy;
      };
      const radii = [];
      for (let degrees = 0; degrees < 360; degrees++) {
        const angle = degrees * Math.PI / 180;
        let lo = approximateRadius * .95, hi = approximateRadius * 1.05;
        for (let iteration = 0; iteration < 14; iteration++) {
          const radius = (lo + hi) / 2;
          if (alpha(centerX + Math.cos(angle) * radius, centerY + Math.sin(angle) * radius) >= 128) lo = radius;
          else hi = radius;
        }
        radii.push((lo + hi) / 2);
      }
      return { spread: Math.max(...radii) - Math.min(...radii), diameter: maxX - minX + 1 };
    }, image.toString('base64'));
    assert(contour.spread < 2, `smooth silhouette, without displaced spikes: ${contour.spread.toFixed(2)} physical px`);
    assert.deepEqual(errors, []);
    console.log('PASS: real Retina resolution, 4K atlas, smooth circular alpha silhouette, no WebGL exceptions.');
    console.log(JSON.stringify({ textureWidth: quality.frame.textureWidth, bufferWidth: quality.width, ...contour }));
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
