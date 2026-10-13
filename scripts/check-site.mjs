import fs from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('dist');
async function files(dir){const entries=await fs.readdir(dir,{withFileTypes:true});return (await Promise.all(entries.map(e=>e.isDirectory()?files(path.join(dir,e.name)):path.join(dir,e.name)))).flat();}
const htmlFiles=(await files(root)).filter(f=>f.endsWith('.html'));
const errors=[];const titles=new Set();const descriptions=new Set();let links=0;let schemas=0;
for(const file of htmlFiles){
  const html=await fs.readFile(file,'utf8');const label=path.relative(root,file);
  const title=html.match(/<title>(.*?)<\/title>/s)?.[1];
  const description=html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  if(!title||titles.has(title))errors.push(`${label}: missing/duplicate title`); titles.add(title);
  if(!description||descriptions.has(description))errors.push(`${label}: missing/duplicate description`); descriptions.add(description);
  if((html.match(/<h1(?:\s|>)/g)||[]).length!==1)errors.push(`${label}: expected one H1`);
  if(!label.includes('404')&&!html.includes('rel="canonical" href="https://blockeddrainsnorthenbeaches.com.au'))errors.push(`${label}: canonical missing/wrong`);
  if(!html.includes('tel:+61493824176'))errors.push(`${label}: phone missing`);
  if(/therydeplumber\.com\.au|Plumber Ryde|G-PNR1DE04C2/.test(html))errors.push(`${label}: stale Ryde reference`);
  for(const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)){try{JSON.parse(match[1]);schemas++;}catch{errors.push(`${label}: invalid JSON-LD`);}}
  for(const match of html.matchAll(/(?:href|src)="(\/[^"?#]*)(?:[^\"]*)"/g)){
    const target=decodeURIComponent(match[1]);if(target.startsWith('//'))continue;links++;
    const candidates=[path.join(root,target),path.join(root,target,'index.html')];
    if(!(await Promise.all(candidates.map(p=>fs.stat(p).then(s=>s.isFile()).catch(()=>false)))).some(Boolean))errors.push(`${label}: missing ${target}`);
  }
  for(const match of html.matchAll(/<img\b[^>]*>/g)){if(!/\balt=/.test(match[0])||!/\bwidth=/.test(match[0])||!/\bheight=/.test(match[0]))errors.push(`${label}: image missing alt/dimensions`);}
}
const sitemap=await fs.readFile(path.join(root,'sitemap.xml'),'utf8');
const routes=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>new URL(m[1]).pathname);
if(routes.length!==htmlFiles.length-1)errors.push(`Sitemap ${routes.length} vs HTML ${htmlFiles.length-1}`);
for(const route of routes){if(!await fs.stat(path.join(root,route,'index.html')).then(s=>s.isFile()).catch(()=>false))errors.push(`Sitemap target missing: ${route}`);}
console.log(JSON.stringify({pages:htmlFiles.length,sitemapRoutes:routes.length,checkedLocalReferences:links,jsonLdBlocks:schemas,errors},null,2));
if(errors.length)process.exit(1);
