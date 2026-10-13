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
  ['garden-trench', `${downloads}/673035671_18009072170890210_5473861845988105802_n.jpg`],
  ['driveway-excavation', `${downloads}/466657502_17949086237890210_4603805838945034407_n.jpg`],
  ['root-damaged-clay', `${downloads}/470135570_17953015352890210_6698517990067768465_n.jpg`],
  ['sink-trap', `${downloads}/470220905_17953011116890210_5633357507678628635_n.jpg`],
  ['stormwater-pit', `${downloads}/499315329_17970884063890210_7672988237699431307_n.jpg`],
  ['stormwater-installation', `${downloads}/499278611_17970884054890210_8837251285144614530_n.jpg`],
  ['cctv-root-findings', `${downloads}/471115579_17953770359890210_3845610370971841272_n (1).jpg`],
  ['silted-pit', `${downloads}/602384125_17994605870890210_210315647804808933_n.jpg`],
  ['pit-clearing', `${downloads}/601933453_17994605852890210_8226165906480334367_n.jpg`],
  ['team-portrait', `${downloads}/Antons Plumbing-071.jpg`],
  ['stocked-truck', `${downloads}/Antons Plumbing-054 (1).jpg`],
  ['drain-inspection-action', `${downloads}/Antons Plumbing-039 (1).jpg`],
];
await fs.mkdir('public/images', { recursive: true });
const manifest = [];
for (const [name, source] of photos) {
  for (const width of [480, 800, 1200]) {
    const output = `public/images/${name}-${width}.webp`;
    if (!await fs.stat(output).catch(() => null)) {
      await sharp(source).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 76, effort: 5 }).toFile(output);
    }
    const metadata = await sharp(output).metadata();
    manifest.push({ file: output, photoId: name, source: path.resolve(source), origin: 'User-supplied real Antons job photography; location unverified unless explicitly stated.', width: metadata.width, height: metadata.height });
  }
}
if (!await fs.stat('public/favicon.png').catch(() => null)) await fs.copyFile(`${ryde}/../favicon-antons.png`, 'public/favicon.png');
await fs.mkdir('docs', { recursive: true });
await fs.writeFile('docs/media-provenance.json', JSON.stringify(manifest, null, 2));
console.log(`Prepared ${manifest.length} responsive WebP images.`);
