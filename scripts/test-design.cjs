const assert = require('node:assert/strict');
const { readFileSync, mkdirSync } = require('node:fs');
const { launch, baseURL } = require('./browser.cjs');
(async () => {
  const browser = await launch();
  try {
    const page = await browser.newPage({ viewport: { width: 360, height: 844 }, reducedMotion: 'reduce' });
    const errors = []; page.on('pageerror', error => errors.push(error.message));
    await page.goto(baseURL);
    const logo = page.locator('.site-header .logo img');
    await logo.waitFor(); await logo.evaluate(img => img.decode());
    assert.equal(await logo.evaluate(img => img.naturalWidth), 202);
    const logoResponse = await page.request.get(await logo.evaluate(img => img.src));
    assert((await logoResponse.body()).equals(readFileSync('public/brand/logo.svg')), 'the browser serves the actual uploaded SVG unchanged');
    await page.locator('.direction-card').first().click({ position: { x: 10, y: 10 } });
    const dialog = page.getByRole('dialog'); await dialog.waitFor();
    assert.equal(await dialog.locator('.logo img').count(), 1);
    assert.equal(Math.round((await dialog.boundingBox()).width), 360);
    assert.equal(await dialog.locator('.direction-dialog-body').evaluate(e => getComputedStyle(e).backgroundColor), 'rgb(32, 197, 124)');
    assert.equal(await dialog.locator('.dialog-benefits li').first().evaluate(e => getComputedStyle(e).backgroundColor), 'rgb(255, 255, 255)');
    assert.equal(await dialog.locator('.dialog-benefits li').count(), 4);
    const selector = dialog.getByRole('combobox', { name: 'Напрямок' });
    await selector.focus();
    for (let index = 1; index < 4; index++) {
      await selector.selectOption(String(index));
      assert.equal(await dialog.locator('h2').textContent(), ['Social Media Advertising', 'PPC Team', 'SEO', 'Affiliate Network'][index]);
      assert(await selector.evaluate(e => document.activeElement === e), 'direction switching keeps selector focus');
      assert(await dialog.evaluate(e => e.open), 'direction switching keeps the dialog open');
    }
    await selector.selectOption('0');
    await dialog.evaluate(e => e.scrollTo(0, e.scrollHeight));
    assert(await dialog.evaluate(e => e.scrollTop > 0), 'long mobile popup scrolls');
    assert.equal(await page.locator('body').evaluate(e => getComputedStyle(e).overflow), 'hidden');
    await dialog.evaluate(e => e.scrollTo(0, 0));
    for (const width of [320, 360, 390, 768, 1440]) {
      await page.setViewportSize({ width, height: 844 }); await page.waitForTimeout(100);
      assert(await dialog.evaluate(e => e.scrollWidth <= e.clientWidth), `popup has no horizontal overflow at ${width}`);
    }
    await page.setViewportSize({ width: 360, height: 844 });
    await page.evaluate(() => document.activeElement?.blur());
    const fullHeight = await dialog.evaluate(e => e.scrollHeight);
    await page.setViewportSize({ width: 360, height: fullHeight });
    mkdirSync('previews', { recursive: true });
    await page.screenshot({ path: 'previews/expla-popup-mobile.png' });
    await page.setViewportSize({ width: 1440, height: 1000 });
    await dialog.evaluate(e => e.scrollTo(0, 0));
    await page.screenshot({ path: 'previews/expla-popup-desktop.png' });
    await dialog.getByRole('button', { name: 'Закрити', exact: true }).click();
    assert.equal(await page.getByRole('dialog').count(), 0);
    assert.notEqual(await page.locator('body').evaluate(e => getComputedStyle(e).overflow), 'hidden');
    assert.deepEqual(errors, []);
    console.log('PASS: original SVG bytes and dimensions, popup logo, screenshot palette/layout, four SMA benefits, direction dropdown/focus, scroll lock, 320–1440px responsiveness and close.');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
