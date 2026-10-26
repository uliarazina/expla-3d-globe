const assert = require('node:assert/strict');
const { mkdirSync } = require('node:fs');
const { launch, baseURL } = require('./browser.cjs');

(async () => {
  const browser = await launch();
  try {
    const context = await browser.newContext({ viewport: { width: 1085, height: 900 }, reducedMotion: 'reduce', permissions: ['clipboard-read', 'clipboard-write'] });
    const page = await context.newPage();
    const errors = [];
    const failedAssets = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => { if (response.status() >= 400 && /\.(js|css|svg|geojson)(\?|$)/.test(response.url())) failedAssets.push(response.url()); });
    await page.goto(baseURL);
    await page.getByRole('heading', { name: 'expla топ-100 партнерів' }).waitFor();
    assert.equal(await page.locator('.direction-card').count(), 4);
    assert.equal(await page.locator('.channel').count(), 6);
    assert.equal(await page.locator('.meter-blocks .is-filled').count(), 8);
    for (let index = 0; index < 4; index++) {
      await page.locator('.detail-button').nth(index).click();
      assert.equal(await page.getByRole('dialog').count(), 1);
      assert.equal(await page.locator('dialog h2').textContent(), ['Social Media Advertising', 'PPC Team', 'SEO', 'Affiliate Network'][index]);
      await page.keyboard.press('Escape');
      await page.waitForFunction(() => !document.querySelector('dialog'));
      assert(await page.locator('.detail-button').nth(index).evaluate(el => document.activeElement === el), 'dialog restores focus');
    }
    await page.getByRole('button', { name: 'EN', exact: true }).click();
    await page.getByRole('heading', { name: 'expla is a top-100 partner' }).waitFor();
    assert.equal(await page.locator('html').getAttribute('lang'), 'en');
    await page.getByRole('button', { name: 'UA', exact: true }).click();
    await page.getByRole('button', { name: 'Контакти', exact: true }).click();
    await page.getByRole('textbox', { name: 'Ваше ім’я', exact: true }).fill('Preview visitor');
    await page.getByRole('textbox', { name: 'Email', exact: true }).fill('visitor@example.com');
    await page.getByRole('textbox', { name: 'Про вашу задачу', exact: true }).fill('Test inquiry, copied locally.');
    await page.getByRole('button', { name: 'Скопіювати звернення' }).click();
    await page.getByRole('status').filter({ hasText: 'Звернення скопійовано' }).waitFor();
    assert((await page.evaluate(() => navigator.clipboard.readText())).includes('Test inquiry, copied locally.'));
    await page.keyboard.press('Escape');
    for (const name of ['Кар’єра', 'Блог']) {
      await page.getByRole('button', { name, exact: true }).click();
      await page.getByRole('dialog').waitFor();
      await page.keyboard.press('Escape');
    }
    await page.getByRole('button', { name: 'Facebook', exact: true }).click();
    await page.getByRole('dialog').waitFor();
    await page.keyboard.press('Escape');
    mkdirSync('previews', { recursive: true });
    // Render the offscreen globe once before full-page capture; reduced motion keeps it still.
    await page.locator('.reach').scrollIntoViewIfNeeded();
    await page.waitForSelector('canvas'); await page.waitForTimeout(600);
    await page.evaluate(() => document.activeElement?.blur());
    await page.screenshot({ path: 'previews/expla-website-desktop.png', fullPage: true });
    for (const width of [320, 390, 768, 1440]) {
      await page.setViewportSize({ width, height: 844 });
      await page.waitForTimeout(250);
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `horizontal overflow at ${width}`);
    }
    await page.setViewportSize({ width: 390, height: 844 }); await page.waitForTimeout(250);
    await page.evaluate(() => scrollTo(0, 0));
    await page.getByRole('button', { name: 'Відкрити меню', exact: true }).click();
    assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'), 'true');
    await page.locator('#site-navigation').getByRole('link', { name: 'Наші напрямки', exact: true }).click();
    assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'), 'false');
    assert.equal(new URL(page.url()).hash, '#directions');
    await page.locator('.reach').scrollIntoViewIfNeeded(); await page.waitForTimeout(500);
    await page.evaluate(() => document.activeElement?.blur());
    await page.screenshot({ path: 'previews/expla-website-mobile.png', fullPage: true });
    assert.deepEqual(errors, []); assert.deepEqual(failedAssets, []);
    console.log('PASS: full site, all direction dialogs, focus restoration/Escape, UA/EN, local inquiry copy, career/blog/social dialogs, mobile menu, responsive widths 320/390/768/1440, GeoJSON/assets.');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
