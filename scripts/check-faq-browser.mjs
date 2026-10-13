import { chromium } from 'playwright-core';
import fs from 'node:fs/promises';

await fs.mkdir('.impeccable/review', { recursive: true });
const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
const results = [];
try {
  for (const width of [1440, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    for (const route of ['/', '/services', '/service-areas/manly', '/services/cctv-drain-inspections', '/drain-advice/blocked-drain-costs', '/contact', '/privacy', '/terms', '/404.html']) {
      await page.goto(`http://127.0.0.1:4335${route}`, { waitUntil: 'networkidle' });
      await page.emulateMedia({ reducedMotion: 'reduce' });
      const details = page.locator('#faqs details');
      const count = await details.count();
      if (count < 15) throw new Error(`${route}: only ${count} FAQs`);
      const last = details.last();
      await last.locator('summary').focus();
      await page.keyboard.press('Enter');
      if (!await last.evaluate(el => el.open)) throw new Error(`${route}: keyboard opening failed`);
      await page.keyboard.press('Enter');
      if (await last.evaluate(el => el.open)) throw new Error(`${route}: keyboard closing failed`);
      const placement = await page.locator('#faqs').evaluate(el => el === document.querySelector('main')?.lastElementChild);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
      if (!placement || overflow) throw new Error(`${route}: placement/overflow failure`);
      if (route === '/service-areas/manly') {
        await details.first().locator('summary').click();
        await page.locator('#faqs').screenshot({ path: `.impeccable/review/faqs-${width}.png` });
      }
      results.push({ width, route, count, lastSection: placement, keyboard: 'passed', overflow });
    }
    await page.close();
  }
} finally {
  await browser.close();
}
await fs.writeFile('.impeccable/review/faq-checks.json', JSON.stringify(results, null, 2));
console.log(JSON.stringify(results, null, 2));
