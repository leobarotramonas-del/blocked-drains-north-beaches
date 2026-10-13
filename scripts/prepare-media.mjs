import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';
const downloads = 'C:/Users/User/Downloads';
const ryde = '../the-ryde-plumber/public/images';
const photos = [
  ['roots', `${downloads}/WhatsApp Image 2026-09-30 at 2.58.17 PM.jpeg`],
  ['bedded-pipe', `${downloads}/WhatsApp Image 2026-09-30 at 2.58.18 PM (1).jpeg`],
  ['junction', `${downloads}/WhatsApp Image 2026-09-30 at 2.58.18 PM (2).jpeg`],
  ['pipe-repair', `${downloads}/WhatsApp Image 2026-09-30 at 2.58.18 PM.jpeg`],
  ['excavation', `${downloads}/WhatsApp Image 2026-09-29 at 1.50.06 PM.jpeg`],
  ['finished-gully', `${downloads}/WhatsApp Image 2026-09-29 at 1.49.48 PM.jpeg`],
  ['jetting', `${downloads}/WhatsApp Image 2026-09-28 at 3.00.20 PM (1).jpeg`],
  ['jetting-work', `${downloads}/WhatsApp Image 2026-09-28 at 3.00.20 PM.jpeg`],
  ['camera', `${downloads}/WhatsApp Image 2026-09-28 at 3.00.21 PM.jpeg`],
  ['existing-camera', `${ryde}/drain-camera-inspection.webp`],
  ['fixture-repair', `${ryde}/vanity-plumbing-repair.webp`],
  ['team-excavation', `${ryde}/drainage-excavation-team.webp`],
  ['technician', `${ryde}/licensed-plumber-portrait.webp`],
];
await fs.mkdir('public/images', { recursive: true });
const manifest = [];
for (const [name, source] of photos) {
  for (const width of [480, 800, 1200]) {
    const output = `public/images/${name}-${width}.webp`;
    await sharp(source).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 76, effort: 5 }).toFile(output);
    manifest.push({ file: output, source: path.resolve(source), origin: 'User-supplied real Antons job photography; location unverified unless explicitly stated.', width });
  }
}
await fs.copyFile(`${ryde}/../favicon-antons.png`, 'public/favicon.png');
await fs.mkdir('docs', { recursive: true });
await fs.writeFile('docs/media-provenance.json', JSON.stringify(manifest, null, 2));
console.log(`Prepared ${manifest.length} responsive WebP images.`);
