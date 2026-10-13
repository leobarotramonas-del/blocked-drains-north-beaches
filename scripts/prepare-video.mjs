import fs from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
const executable = 'C:/Users/User/Documents/ChatGPT/Antons Plumbing/.media-tools/ffmpeg.exe';
const videos = [
  ['kurrajong-overflow', 'C:/Users/User/Downloads/Kurrajong Blocked Overflow Gully.mp4'],
  ['kurrajong-reel', 'C:/Users/User/Downloads/Kurrajong Facebook Reel  Anton’s Plumbing & Gas.mp4'],
];
await fs.mkdir('public/videos', { recursive:true });
await fs.mkdir('.impeccable/review', { recursive:true });
for (const [name,input] of videos) {
  const result = spawnSync(executable, ['-hide_banner','-loglevel','error','-y','-i',input,'-vf','scale=540:-2','-r','30','-c:v','libx264','-preset','fast','-crf','27','-pix_fmt','yuv420p','-c:a','aac','-b:a','80k','-movflags','+faststart',`public/videos/${name}.mp4`],{encoding:'utf8'});
  if (result.status !== 0) throw new Error(result.stderr || result.error?.message);
  const poster = spawnSync(executable, ['-hide_banner','-loglevel','error','-y','-ss','3','-i',input,'-frames:v','1','-vf','scale=540:-2',`public/images/${name}-poster.webp`],{encoding:'utf8'});
  if (poster.status !== 0) throw new Error(poster.stderr);
  const sheet = spawnSync(executable, ['-hide_banner','-loglevel','error','-y','-i',input,'-vf','fps=1/12,scale=200:-2,tile=5x1','-frames:v','1',`.impeccable/review/${name}-contact.png`],{encoding:'utf8'});
  if (sheet.status !== 0) throw new Error(sheet.stderr);
  console.log(name, (await fs.stat(`public/videos/${name}.mp4`)).size);
}
