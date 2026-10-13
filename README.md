# Antons Blocked Drains North Beaches

A separate static website based on the supplied Ryde project's identity and business details. The original project is not modified.

## Run locally

Use Node 24 LTS and `npm ci`, then `npm run dev`. Open http://127.0.0.1:4335. `npm run build` type-checks, builds static pages and verifies local links, metadata, structured data, image attributes and sitemap coverage. `npm run preview` serves the production output locally.

## Content

- 11 drain services, with causes, symptoms, professional methods, equipment, materials, limitations and next steps.
- 45 Northern Beaches local pages grouped geographically, with bespoke booking advice and a local FAQ.
- Four advice guides, about, contact, privacy, service terms, real-work gallery and two Kurrajong videos.
- One canonical configuration: `https://blockeddrainsnorthenbeaches.com.au` (exact user-supplied spelling). Public brand: `Antons Blocked Drains North Beaches`.
- Contact: 0493 824 176. NSW contractor licence 210933C. Operator disclosed once in the homepage body and once in the global footer; legalName also appears in structured data.

## Production handover

Cloudflare Worker `blocked-drains-north-beaches` is connected to this GitHub repository with production branch `main`, repository root `/`, build command `npm run build` and deploy command `npx wrangler deploy`. The Worker is attached to `blockeddrainsnorthenbeaches.com.au`. Keep the Worker name in `wrangler.jsonc` aligned with the connected project. Check Cloudflare's build history after pushing; a GitHub commit alone is not proof of a successful deployment.

Set `PUBLIC_ALLOW_INDEXING=true` in the Cloudflare production build variables for an approved indexable launch; the default and preview builds output `noindex,follow`. Robots permits crawling so search engines can read that directive. Development builds are always noindex.

Cloudflare Workers static-assets configuration is provided in `wrangler.jsonc`. Build with `npm ci && npm run build`; output directory is `dist`. The root path and all sitemap URLs use the supplied domain. Configure the hosting platform's www-to-apex and HTTP-to-HTTPS redirects for the chosen domain. Do not create redirects from the existing Ryde site.

If analytics is wanted, set a dedicated `PUBLIC_GA_ID`. It defaults to empty and does not reuse Ryde's measurement ID. Only explicit analytics configuration adds the Google script and phone-click event. No form backend, email address, office location or payment system is invented; booking is by working telephone links.

## Media

`npm run media` regenerates the responsive WebP variants from the supplied Downloads and Ryde sources. `scripts/prepare-video.mjs` regenerates the two 540px H.264 videos using the existing local FFmpeg executable. Those scripts are development utilities tied to the supplied source locations; deployed files are entirely self-contained in `public`.

All nine uploaded photographs are used. Four relevant Ryde assets are reused, along with its favicon. Source paths are recorded in `docs/media-provenance.json`; image sidecars preserve provenance. No original media is overwritten. Videos have native controls, embedded captions from their original edits, `preload="none"`, local posters and no autoplay. They are labelled as Kurrajong footage, not Northern Beaches job records.

## SEO approach

Static HTML, unique titles/descriptions, one H1 per page, absolute self-canonicals, sitemap, breadcrumbs, Plumber and Service structured data, crawlable service/area links and accessible native navigation. No invented office addresses, ratings, local job claims, search volumes or guaranteed rankings. Customer-facing geographic guidance is conditional on the actual property.

Local pages are published as useful booking and service information; the owner should add genuine suburb-specific completed jobs, approved review evidence and updated local service details as those become available. Domain ownership and branded search presence require separate setup. Search Console submission and index monitoring happen after launch.

## Checks

Every HTML page includes a final FAQ section with at least 15 questions. The 45 locality pages have 17 questions each, and the 11 service pages have 16 each. Content is maintained in `src/data/faqs.ts`, using the existing service, locality and guide facts. The layout renders one FAQ section and matching FAQPage JSON-LD from the same data. The build verifies minimum counts, unique questions, bottom placement and exact visible/schema agreement. `node scripts/check-faq-browser.mjs` checks desktop/mobile FAQ keyboard controls and placement using the running local preview.

`npm run capture` uses installed Chrome and Playwright to inspect desktop/mobile templates, search, menu, missing images, overflow and unwanted video requests. See `design-qa.md` for the performed checks and remaining launch decisions.
