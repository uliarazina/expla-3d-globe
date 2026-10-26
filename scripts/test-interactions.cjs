const assert = require('node:assert/strict');
const { launch, baseURL } = require('./browser.cjs');
(async () => {
  const browser = await launch();
  try {
    const page = await browser.newPage({ viewport: { width: 1085, height: 900 }, reducedMotion: 'no-preference' });
    const errors = []; page.on('pageerror', e => errors.push(e.message));
    page.on('console', message => { if (message.type() === 'error' && /THREE.WebGLProgram|shader error|VALIDATE_STATUS/i.test(message.text())) errors.push(message.text()); });
    await page.goto(baseURL);
    const background = page.locator('.hero-background canvas'); await background.waitFor();
    const fieldBounds = await background.boundingBox();
    const navBounds = await page.locator('.site-header').boundingBox();
    assert(fieldBounds.y <= navBounds.y && fieldBounds.width >= navBounds.width, 'emerald field also covers the header');
    // Resolve the CSS length against the actual clip-path (clamp may be unevaluated in a variable).
    const notch = await page.locator('.directions').evaluate(e => parseFloat(getComputedStyle(e).clipPath.match(/65% ([\d.]+)px/)[1]));
    const directionsBox = await page.locator('.directions').boundingBox();
    assert(fieldBounds.y + fieldBounds.height >= directionsBox.y + notch, 'the shader covers the sharp corner completely');

    await page.waitForTimeout(500);
    const ambient = await background.screenshot(); await page.waitForTimeout(800);
    const idle = await background.screenshot();
    assert(!ambient.equals(idle), 'hero shader drifts autonomously');
    await page.locator('.hero').hover({ position: { x: 200, y: 60 } }); await page.waitForTimeout(600);
    const hover = await background.screenshot();
    const difference = await page.evaluate(async images => {
      const buffers = [];
      for (const source of images) {
        const image = new Image(); image.src = 'data:image/png;base64,' + source; await image.decode();
        const canvas = document.createElement('canvas'); canvas.width = image.width; canvas.height = image.height;
        const context = canvas.getContext('2d'); context.drawImage(image, 0, 0);
        buffers.push(context.getImageData(0, 0, canvas.width, canvas.height).data);
      }
      const mean = (a, b) => {
        let total = 0, count = 0;
        for (let index = 0; index < a.length; index++) if (index % 4 !== 3) { total += Math.abs(a[index] - b[index]); count++; }
        return total / count;
      };
      return { idle: mean(buffers[0], buffers[1]), hover: mean(buffers[1], buffers[2]) };
    }, [ambient, idle, hover].map(buffer => buffer.toString('base64')));
    // Autonomous animation is now deliberately prominent; unequal capture intervals
    // and different wave phases do not imply a fixed hover/idle difference ratio.
    assert(difference.idle > .1, `visible animation without any pointer input: ${JSON.stringify(difference)}`);
    assert(difference.hover > .1, `animation continues during pointer interaction: ${JSON.stringify(difference)}`);
    const card = page.locator('.direction-card').first();
    await card.hover(); await page.waitForTimeout(350);
    assert.equal(await card.locator('.detail-button').evaluate(e => getComputedStyle(e).color), 'rgb(32, 197, 124)', 'the card highlights its CTA on hover');
    await card.click({ position: { x: 12, y: 12 } });
    await page.getByRole('dialog').waitFor();
    assert.equal(await page.locator('.dialog-benefits li').count(), 4);
    await page.keyboard.press('Escape');
    await page.setViewportSize({ width: 1085, height: 300 });
    const strip = page.locator('.channel-strip');
    await strip.evaluate(e => e.scrollIntoView({ block: 'center', behavior: 'instant' }));
    await strip.hover();
    const track = page.locator('.channel-track');
    const first = await track.evaluate(e => new DOMMatrixReadOnly(getComputedStyle(e).transform).m41);
    await page.waitForTimeout(250);
    assert((await track.evaluate(e => new DOMMatrixReadOnly(getComputedStyle(e).transform).m41)) > first, 'logos keep moving while hovered');
    const initialY = await page.evaluate(() => scrollY);
    await page.mouse.wheel(0, 180); await page.waitForTimeout(120);
    assert.equal(await strip.getAttribute('data-wheel-position'), '180');
    assert.equal(await page.evaluate(() => scrollY), initialY, 'wheel scroll is consumed while browsing logos');
    await page.mouse.wheel(0, -90); await page.waitForTimeout(120);
    assert.equal(await strip.getAttribute('data-wheel-position'), '90', 'reverse wheel moves back');
    await page.mouse.wheel(0, 10000); await page.waitForTimeout(120);
    assert.equal(await strip.getAttribute('data-wheel-position'), await strip.getAttribute('data-wheel-maximum'));
    await page.mouse.wheel(0, 250); await page.waitForTimeout(250);
    assert((await page.evaluate(() => scrollY)) > initialY, 'at the last logo wheel scrolling reaches the footer');
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.evaluate(() => scrollTo({ top: 0, behavior: 'instant' })); await page.waitForTimeout(400);
    const staticShader = await background.screenshot(); await page.waitForTimeout(400);
    assert(staticShader.equals(await background.screenshot()), 'reduced motion stops the hero shader');
    assert.deepEqual(errors, []);
    console.log('PASS: ambient/reactive hero shader, full-card click and CTA highlight, supplied popup details, hover autoplay, bidirectional wheel and footer handoff, reduced motion.');
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
