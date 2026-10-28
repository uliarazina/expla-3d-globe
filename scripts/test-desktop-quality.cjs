const assert = require('node:assert/strict');
const { writeFileSync } = require('node:fs');
const { launch, baseURL } = require('./browser.cjs');
(async () => {
  const browser = await launch(); const samples = [];
  try {
    for (const dpr of [1, 2]) {
      const context = await browser.newContext({ viewport: { width: 1440, height: 1100 }, deviceScaleFactor: dpr, reducedMotion: 'reduce' });
      const page = await context.newPage(); await page.goto(baseURL);
      const globe = page.locator('.reach-globe canvas'); await globe.waitFor();
      for (const width of [1440, 1920, 2560]) {
        await page.setViewportSize({ width, height: 1100 });
        await globe.scrollIntoViewIfNeeded(); await page.waitForTimeout(250);
        const sample = await globe.evaluate(canvas => {
          const box = canvas.getBoundingClientRect(), gl = canvas.getContext('webgl2');
          return { cssWidth: box.width, bufferWidth: gl.drawingBufferWidth, cssHeight: box.height, bufferHeight: gl.drawingBufferHeight };
        });
        assert(Math.abs(sample.bufferWidth - Math.floor(sample.cssWidth * dpr)) <= 1);
        assert(Math.abs(sample.bufferHeight - Math.floor(sample.cssHeight * dpr)) <= 1);
        assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
        samples.push({ viewport: width, dpr, ...sample });
        if (dpr === 2 && width === 1920) await globe.screenshot({ path: 'previews/expla-globe-desktop-retina.png', omitBackground: true });
      }
      await context.close();
    }
    writeFileSync('previews/desktop-quality.json', JSON.stringify({ atlasWidth: 4096, samples }, null, 2)+'\n');
    console.log('PASS: native drawing-buffer sizing, no CSS upscale or horizontal overflow at 1440/1920/2560, DPR 1 and 2.', samples);
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
