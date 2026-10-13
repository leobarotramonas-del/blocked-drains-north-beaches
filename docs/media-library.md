# Photo use

Use a photograph only once on any page. Reuse across different pages is allowed.
`npm run build` checks rendered images and video posters for repeated photo paths,
including different responsive sizes. Keep a single asset name for each original;
do not introduce renamed copies to bypass this check.

The October 2026 upload adds twelve distinct photos, optimised into responsive
WebP assets by `scripts/prepare-media.mjs`. The supplied bathroom-vanity photo
(`WhatsApp Image 2026-07-20 at 3.00.43 PM (2).jpeg`) is already available as
`fixture-repair`; it is deliberately not imported again.

New asset names: `garden-trench`, `driveway-excavation`, `root-damaged-clay`,
`sink-trap`, `stormwater-pit`, `stormwater-installation`, `cctv-root-findings`,
`silted-pit`, `pit-clearing`, `team-portrait`, `stocked-truck`, and
`drain-inspection-action`. Original source paths and actual image dimensions are
recorded in `media-provenance.json`. Smaller originals are not enlarged.

`public/videos/antons-root-cause.mp4` is the user-supplied **Antons Plumbing Root
Cause.mp4**, retained in the library without adding another player to the page.
Its job location is unverified. No locality or outcome should be inferred from
any new photo or video without confirmation.
