import { test, expect } from '@playwright/test';
import { DNS_DESIGN_SYSTEM } from '@dolomitinordicski/dns-shared-data/design-system';
import { DNS_FOUNDATION_RUNTIME_VERSION } from '@dolomitinordicski/dns-shared-data/foundation';

for (const locale of ['it', 'de', 'en']) {
  for (const width of [1280, 390]) {
    test(locale + ' document uses Foundation at ' + width + 'px', async ({ page }) => {
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      await page.setViewportSize({ width, height: 900 });
      await page.goto('/dns-wiki/' + locale + '/');
      await expect(page.locator('html')).toHaveAttribute('lang', locale);
      await expect(page.locator('html')).toHaveAttribute('data-dns-foundation-runtime', DNS_FOUNDATION_RUNTIME_VERSION);
      await expect(page.locator('html')).toHaveAttribute('data-dns-design-source', 'package');
      await expect(page.locator('.dns-a11y-trigger')).toHaveCount(1);
      await expect(page.locator('starlight-theme-select')).toHaveCount(0);
      await expect(page.locator('[data-dns-tool-footer]')).toContainText('Foundation v' + DNS_FOUNDATION_RUNTIME_VERSION);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      await page.screenshot({ path: 'test-results/wiki-' + locale + '-' + width + '.png', fullPage: true });
      expect(errors).toEqual([]);
    });
  }
}
test('Foundation owns theme, persistence and system preference', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/dns-wiki/it/');
  await page.locator('.dns-a11y-trigger').click();
  await page.locator('.dns-a11y-panel [data-theme="dark"]').click();
  await expect(page.locator('html')).toHaveAttribute('data-dns-theme', 'dark');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.locator('.dns-a11y-trigger').click();
  await page.locator('.dns-a11y-panel [data-theme="system"]').click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await page.emulateMedia({ colorScheme: 'dark' });
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.locator('.dns-a11y-close').click();
  await page.screenshot({ path: 'test-results/wiki-dark.png', fullPage: true });
});
test('documentation search and translated route navigation remain usable', async ({ page }) => {
  await page.goto('/dns-wiki/it/workspace/');
  await page.locator('site-search button[data-open-modal]').click();
  const search = page.locator('.pagefind-ui__search-input');
  await search.fill('Workspace');
  await expect(page.locator('.pagefind-ui__result-link').first()).toBeVisible();
  await page.keyboard.press('Escape');
  const language = page.locator('starlight-lang-select select').first();
  await language.selectOption({ label: 'Deutsch' });
  await expect(page).toHaveURL(/\/de\/workspace\//);
  await expect(page.locator('html')).toHaveAttribute('lang', 'de');
});
test('mobile documentation menu remains usable', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/dns-wiki/it/workspace/');
  const menu = page.locator('button[aria-controls="starlight__sidebar"], button[popovertarget="starlight__sidebar"], starlight-menu-button button').first();
  await expect(menu).toBeVisible();
  await menu.click();
  await expect(page.locator('#starlight__sidebar')).toBeVisible();
});

test('static document first paint uses package styles without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4321/dns-wiki/it/');
  await expect(page.locator('.dns-card').first()).toHaveCSS('border-radius', DNS_DESIGN_SYSTEM.shape.cardRadiusPx + 'px');
  await expect(page.locator('[data-dns-tool-footer]')).toContainText('Foundation v' + DNS_FOUNDATION_RUNTIME_VERSION);
  await expect(page.locator('.dns-tool-header-title')).toBeVisible();
  await context.close();
});
