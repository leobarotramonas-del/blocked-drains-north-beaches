import { defineConfig } from 'astro/config';
export default defineConfig({
  output: 'static',
  site: 'https://blockeddrainsnorthenbeaches.com.au',
  trailingSlash: 'never',
  build: { format: 'directory', inlineStylesheets: 'auto' },
});
