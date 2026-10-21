import { chromium } from 'playwright-core';
import { spawn } from 'node:child_process';

const preview = spawn(
  process.execPath,
  ['node_modules/astro/bin/astro.mjs', 'preview', '--host', '127.0.0.1', '--port', '4336'],
  { stdio: ['ignore', 'pipe', 'inherit'] },
);

await new Promise((resolve, reject) => {
  const timeout = setTimeout(() => reject(new Error('Preview server did not start in time.')), 15_000);
  preview.once('error', reject);
  preview.stdout.on('data', chunk => {
    if (chunk.toString().includes('ready in')) {
      clearTimeout(timeout);
      resolve();
    }
  });
});

let browser;

try {
  browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
  });
  const page = await browser.newPage();
  const tagRequests = [];

  page.on('request', request => {
    if (request.url().includes('googletagmanager.com/gtag/js')) {
      tagRequests.push(request.url());
    }
  });

  await page.goto('http://127.0.0.1:4336/', { waitUntil: 'networkidle' });
  const requestsBeforeInteraction = [...tagRequests];

  await page.evaluate(() => {
    document.querySelector('a[href^="tel:"]')?.addEventListener('click', event => event.preventDefault(), { once: true });
  });
  await page.locator('a[href^="tel:"]').first().click();
  await page.waitForTimeout(300);

  const dataLayer = await page.evaluate(() => window.dataLayer.map(entry => ({
    command: entry[0],
    name: entry[1],
  })));

  const result = {
    tagRequestsBeforeInteraction: requestsBeforeInteraction.length,
    tagRequestsAfterPhoneClick: tagRequests.length,
    phoneClickQueued: dataLayer.some(entry => entry.command === 'event' && entry.name === 'phone_click'),
  };

  console.log(JSON.stringify(result, null, 2));

  if (result.tagRequestsBeforeInteraction !== 0 || result.tagRequestsAfterPhoneClick !== 1 || !result.phoneClickQueued) {
    process.exitCode = 1;
  }
} finally {
  await browser?.close();
  preview.kill();
}
