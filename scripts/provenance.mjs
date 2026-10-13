import fs from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
const script='C:/Users/User/.codex/skills/impeccable/scripts/embed-prompt.mjs';
for(const file of (await fs.readdir('public/images')).filter(f=>/\.(webp|png)$/.test(f))){
  const origin=file.includes('kurrajong')?'Origin: frame extracted from user-supplied Kurrajong job video. Real Antons footage; Kurrajong is outside the Northern Beaches.':'Origin: real Antons job photography supplied by the user in Downloads or in the-ryde-plumber/public/images. Resized and encoded as WebP for web delivery. See docs/media-provenance.json for original file mapping. No generated image or fabricated location.';
  const result=spawnSync(process.execPath,[script,`public/images/${file}`,'--prompt',origin],{encoding:'utf8'});if(result.status!==0)throw new Error(result.stderr);
}
spawnSync(process.execPath,[script,'public/favicon.png','--prompt','Origin: existing Antons favicon from the user-supplied Ryde project.'],{stdio:'inherit'});
