const assert = require('node:assert/strict');
const { readFileSync, mkdirSync } = require('node:fs');
const { launch, baseURL } = require('./browser.cjs');
(async () => {
  const browser = await launch();
  try {
    const page = await browser.newPage({ viewport: { width: 360, height: 844 }, reducedMotion: 'reduce' });
    const errors = []; page.on('pageerror', error => errors.push(error.message));
    await page.goto(baseURL);
    await page.evaluate(() => document.fonts.ready);
    assert(await page.evaluate(() => document.fonts.check('400 16px "e-Ukraine"', 'Україна')), 'uploaded Ukrainian font is loaded');
    assert(await page.evaluate(() => [...document.fonts].some(face => face.family.includes('e-Ukraine') && face.weight === '400' && face.status === 'loaded')), 'a real uploaded font face, not a fallback, is decoded');
    assert((await page.locator('body').evaluate(e => getComputedStyle(e).fontFamily)).includes('e-Ukraine'));
    const logo = page.locator('.site-header .logo img');
    await logo.waitFor(); await logo.evaluate(img => img.decode());
    assert.equal(await logo.evaluate(img => img.naturalWidth), 202);
    const logoResponse = await page.request.get(await logo.evaluate(img => img.src));
    assert((await logoResponse.body()).equals(readFileSync('public/brand/logo.svg')), 'the browser serves the actual uploaded SVG unchanged');
    await page.locator('.direction-card').first().click({ position: { x: 10, y: 10 } });
    const dialog = page.getByRole('dialog'); await dialog.waitFor();
    assert.equal(await dialog.locator('.logo img').count(), 1);
    assert.equal(Math.round((await dialog.boundingBox()).width), 360);
    assert.equal(await dialog.locator('.direction-dialog-body').evaluate(e => getComputedStyle(e).backgroundColor), 'rgb(39, 199, 124)');
    assert.equal(await dialog.locator('.dialog-benefits li').first().evaluate(e => getComputedStyle(e).backgroundColor), 'rgb(255, 255, 255)');
    assert.equal(await dialog.locator('.dialog-benefits li').count(), 4);
    await dialog.getByRole('button', { name: 'Закрити', exact: true }).hover();
    assert.equal(await dialog.getByRole('button', { name: 'Закрити', exact: true }).evaluate(e => getComputedStyle(e).backgroundColor), 'rgb(255, 255, 255)', 'close control has a white hover state');
    const selector = dialog.getByRole('button', { name: 'Напрямок', exact: true });
    await selector.focus();
    for (let index = 1; index < 4; index++) {
      await selector.click();
      await dialog.locator('.direction-options').getByRole('button', { name: ['Social Media Advertising', 'PPC Team', 'SEO', 'Affiliate Network'][index], exact: true }).click();
      assert.equal(await dialog.locator('h2').textContent(), ['Social Media Advertising', 'PPC Team', 'SEO', 'Affiliate Network'][index]);
      assert(await selector.evaluate(e => document.activeElement === e), 'direction switching keeps selector focus');
      assert(await dialog.evaluate(e => e.open), 'direction switching keeps the dialog open');
    }
    await selector.click();
    await dialog.locator('.direction-options').getByRole('button', { name: 'Social Media Advertising', exact: true }).click();
    await dialog.evaluate(e => e.scrollTo(0, e.scrollHeight));
    assert(await dialog.evaluate(e => e.scrollTop > 0), 'long mobile popup scrolls');
    assert.equal(await page.locator('body').evaluate(e => getComputedStyle(e).overflow), 'hidden');
    const controls = dialog.locator('.direction-dialog-controls');
    const pinnedTop = (await controls.boundingBox()).y;
    assert(Math.abs(pinnedTop - (await dialog.boundingBox()).y) < 1, 'mobile controls stay pinned at the dialog top after scrolling');
    for (const control of [dialog.locator('.logo img'), dialog.getByRole('button', { name: 'Закрити', exact: true }), selector]) {
      const box = await control.boundingBox();
      assert(box.y >= 0 && box.y + box.height <= 844, 'logo, close and direction selector remain visible at the bottom');
    }
    await selector.click();
    assert.equal(await dialog.locator('.direction-options button:visible').count(), 3, 'direction menu is usable from the bottom');
    await dialog.locator('.direction-options').getByRole('button', { name: 'PPC Team', exact: true }).click();
    assert.equal(await dialog.locator('h2').textContent(), 'PPC Team');
    assert.equal(await dialog.evaluate(e => e.scrollTop), 0, 'switching from the pinned menu resets the content scroll');
    await selector.click();
    await dialog.locator('.direction-options').getByRole('button', { name: 'Social Media Advertising', exact: true }).click();
    await dialog.evaluate(e => e.scrollTo(0, e.scrollHeight));
    await page.screenshot({ path: 'previews/expla-popup-mobile-sticky.png' });
    await page.setViewportSize({ width: 568, height: 320 });
    await dialog.evaluate(e => e.scrollTo(0, e.scrollHeight));
    await selector.click();
    const options = await dialog.locator('.direction-options').boundingBox();
    assert(options.y >= 0 && options.y + options.height <= 320, 'landscape direction menu fits and scrolls in the viewport');
    await selector.click();
    await page.setViewportSize({ width: 360, height: 844 });
    await dialog.evaluate(e => e.scrollTo(0, 0));
    for (const width of [320, 360, 390, 768, 1440]) {
      await page.setViewportSize({ width, height: 844 }); await page.waitForTimeout(100);
      assert(await dialog.evaluate(e => e.scrollWidth <= e.clientWidth), `popup has no horizontal overflow at ${width}`);
    }
    await page.setViewportSize({ width: 360, height: 844 });
    await page.evaluate(() => document.activeElement?.blur());
    await page.mouse.move(0, 0);
    const fullHeight = await dialog.evaluate(e => e.scrollHeight);
    await page.setViewportSize({ width: 360, height: fullHeight });
    mkdirSync('previews', { recursive: true });
    await page.screenshot({ path: 'previews/expla-popup-mobile.png' });
    await page.setViewportSize({ width: 1440, height: 1000 });
    await dialog.evaluate(e => e.scrollTo(0, 0));
    await page.screenshot({ path: 'previews/expla-popup-desktop.png' });
    await page.setViewportSize({ width: 1440, height: 1800 });
    const labels = ['Social Media Advertising', 'PPC Team', 'SEO', 'Affiliate Network'];
    const slugs = ['social', 'ppc', 'seo', 'affiliate'];
    for (let index = 0; index < labels.length; index++) {
      const tab = dialog.locator('.direction-tabs').getByRole('button', { name: labels[index] });
      await tab.click();
      assert.equal(await tab.getAttribute('aria-current'), 'page');
      assert.equal(await dialog.locator('h2').textContent(), labels[index]);
      assert.equal(await dialog.locator('.dialog-benefits li').count(), index === 3 ? 6 : 4);
      assert.equal(await dialog.locator('.direction-stats dt').count(), index === 3 ? 3 : 0);
      assert.equal(await dialog.locator('.dialog-benefits .benefit-icon').count(), index === 3 ? 6 : 4);
      assert((await dialog.evaluate(e => getComputedStyle(e).fontFamily)).includes('e-Ukraine'));
      await page.mouse.move(0, 0); await page.evaluate(() => document.activeElement?.blur());
      await dialog.screenshot({ path: `previews/expla-popup-${slugs[index]}-desktop.png` });
    }
    await page.setViewportSize({ width: 360, height: 3000 });
    const captureMobile = async path => {
      await dialog.evaluate(e => e.scrollTo(0, 0));
      const bottom = await dialog.locator('.direction-dialog-benefits').evaluate(e => e.getBoundingClientRect().bottom);
      await page.screenshot({ path, clip: { x: 0, y: 0, width: 360, height: Math.ceil(bottom) } });
    };
    assert.equal(await dialog.locator('.dialog-benefits li:visible').count(), 4);
    await dialog.getByRole('button', { name: 'Показати більше' }).click();
    assert.equal(await dialog.locator('.dialog-benefits li:visible').count(), 6);
    await captureMobile('previews/expla-popup-affiliate-mobile-expanded.png');
    await dialog.getByRole('button', { name: 'Показати менше' }).click();
    assert.equal(await dialog.locator('.dialog-benefits li:visible').count(), 4);
    await dialog.evaluate(e => e.scrollTo(0, 0));
    await captureMobile('previews/expla-popup-affiliate-mobile.png');
    await dialog.getByRole('button', { name: 'Напрямок', exact: true }).click();
    assert.equal(await dialog.locator('.direction-options button:visible').count(), 3);
    await captureMobile('previews/expla-popup-mobile-menu.png');
    for (const icon of await dialog.locator('.benefit-icon:visible').all()) {
      assert(await icon.evaluate(async image => { await image.decode(); return image.naturalWidth > 0; }), 'uploaded SVG icon decodes');
    }
    await dialog.getByRole('button', { name: 'Закрити', exact: true }).click();
    assert.equal(await page.getByRole('dialog').count(), 0);
    assert.notEqual(await page.locator('body').evaluate(e => getComputedStyle(e).overflow), 'hidden');
    assert.deepEqual(errors, []);
    console.log('PASS: original SVG bytes and dimensions, popup logo, screenshot palette/layout, four SMA benefits, direction dropdown/focus, scroll lock, 320–1440px responsiveness and close.');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
