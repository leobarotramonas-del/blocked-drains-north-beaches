import fs from 'node:fs/promises';
import sharp from 'sharp';
import { createHash } from 'node:crypto';
const original = JSON.parse(await fs.readFile('docs/media-provenance.json', 'utf8'));
const photos = [...new Map(original.map(p => [p.photoId, p])).values()];
const output = [];
await fs.mkdir('public/images/optimized', {recursive:true});
for (const photo of photos) {
  for (const width of [200, 320, 480, 800, 1200]) {
   for (const format of ['webp', 'avif']) {
    const pipeline = sharp(photo.source).rotate().resize({width, withoutEnlargement:true});
    const buffer = await (format === 'avif' ? pipeline.avif({quality:40, effort:4}) : pipeline.webp({quality:58, effort:6})).toBuffer();
    const hash = createHash('sha256').update(buffer).digest('hex').slice(0,12);
    const file = `public/images/optimized/${photo.photoId}-${width}-${hash}.${format}`;
    await fs.writeFile(file, buffer);
    const dimensions = await sharp(buffer).metadata();
    output.push({...photo, file, width:dimensions.width, height:dimensions.height});
   }
  }
}
await fs.writeFile('docs/optimized-media.json', JSON.stringify(output,null,2));
console.log(`Generated ${output.length} content-hashed responsive images.`);
