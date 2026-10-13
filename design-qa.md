# Design and build QA

## 13 October 2026 — per-page photo cleanup

- Replaced all six repeated-photo placements on the homepage and services directory, and replaced the near-identical second jetting gallery shot.
- Added twelve distinct supplied photos as 36 responsive WebP assets; reused the existing vanity photograph instead of importing a duplicate. Added the root-cause video to the library without a new page player.
- Photo component now uses actual image dimensions and non-duplicated responsive width descriptors. Original files are never enlarged.
- The new duplicate-photo build guard failed against the previous output with six findings, then passed on all 70 rebuilt pages. It checks rendered image sources and video posters, normalising responsive sizes; it is not a perceptual-similarity detector.
- Astro check: zero errors, warnings or hints. Build and local-reference/schema/sitemap checks passed.
- Fourteen desktop/mobile browser checks passed, including the service directory: no broken images, horizontal overflow, script errors or premature video downloads. Reviewed service directory, homepage and gallery captures for image relevance and cropping.
- Existing design and factual copy preserved under the Impeccable refinement guidance. No production deployment or DNS changes made.

## Original build evidence

12 October 2026. Separate project; no publishing or DNS changes performed.

## Completed automated checks

- Astro 7.3.8 static build: 70 HTML pages (69 sitemap destinations plus custom 404).
- Astro check: 0 errors, 0 warnings, 0 hints.
- 2,929 local links and asset references checked in the final build; no missing targets.
- Unique page titles and descriptions, one H1 per page, self-canonicals on intended domain, 70 valid JSON-LD blocks and complete sitemap coverage.
- npm audit after dependency updates: 0 vulnerabilities.
- Forty-two shipping rasters have source provenance (39 responsive photo variants, two video posters and one favicon).
- Twelve desktop/mobile checks across homepage, service, local-area, coverage, gallery and contact templates: HTTP 200, no horizontal overflow, no broken images, no browser script errors.
- Suburb search: matching result and no-match recovery passed. Mobile navigation: opening and Escape dismissal passed. Keyboard symptom disclosures and playback of both videos on request passed; results are saved in `interaction-checks.json`.
- No MP4 requests before a visitor starts playback, including after scrolling the work gallery.

## Performance evidence

Local production preview, fresh browser cache, 390 × 844, 1.6 Mbps download, 150 ms latency and 4× CPU slowdown. Final measured run after adding a body-font preload: homepage LCP 2.89 s, service 1.78 s, Manly local page 1.83 s, work gallery 2.00 s. All measured cumulative layout shift 0. Initial resource transfer was approximately 259 KB homepage and 177 KB service/local pages; gallery 854 KB. No external JavaScript payload was fetched; navigation and search use small inline scripts.

These are one-run lab observations, not Lighthouse scores, field Core Web Vitals or production hosting results. Earlier runs varied (homepage 2.90–3.95 s, local page 2.77–3.65 s). The final homepage LCP remains above the 2.5 s good threshold and should be rechecked on the production CDN. Static HTML, preloaded self-hosted fonts, responsive WebP, native controls and deferred videos keep the baseline light.

## Visual evidence

Screenshots and machine-readable browser/performance reports are in `.impeccable/review`. Desktop: 1440 × 900. Mobile: 390 × 844. The design detector ran once and raised a border-accent-on-rounded warning for the square `.aside` component; no radius is applied to that component, so the warning is not applicable.

Independent finish review requested two copy corrections: replace public editorial/provenance language with natural business wording, and preserve proper-name/acronym casing. Both were applied, rebuilt and recaptured. The reviewer's verdict scored both resolved with disposition `ship`; that verdict covers the scored fixes, not a second whole-site audit. Reports are recorded alongside the screenshots.

## Launch settings

- Confirm the exact requested brand and domain spelling. Configuration preserves `blockeddrainsnorthenbeaches.com.au`.
- Production build needs `PUBLIC_ALLOW_INDEXING=true`; review builds default to noindex.
- Configure hosting and domain redirects, then submit sitemap in Search Console after publishing.
- Optional analytics uses a dedicated ID; no Ryde analytics data is mixed in.
- Business phone and licence retained from supplied source. No new register verification, office address, review rating, search-volume forecast or ranking guarantee is invented.
- Kurrajong footage is explicitly described as work outside the Northern Beaches.
