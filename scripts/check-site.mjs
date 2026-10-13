import fs from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('dist');
async function files(dir){const entries=await fs.readdir(dir,{withFileTypes:true});return (await Promise.all(entries.map(e=>e.isDirectory()?files(path.join(dir,e.name)):path.join(dir,e.name)))).flat();}
const htmlFiles=(await files(root)).filter(f=>f.endsWith('.html'));
const errors=[];const titles=new Set();const descriptions=new Set();let links=0;let schemas=0;
let minimumFaqs=Infinity;
const decodeHtml=value=>value.replace(/&(?:amp|lt|gt|quot|apos|#39|#x27|#\d+);/g, entity=>({'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&apos;':"'",'&#39;':"'",'&#x27;':"'"}[entity] ?? String.fromCodePoint(Number(entity.slice(2,-1)))));
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
  const faqSections=[...html.matchAll(/<section\b[^>]*\bid="faqs"[^>]*>(.*?)<\/section>/gs)];
  const visibleFaqs=[...(faqSections[0]?.[1]||'').matchAll(/<details\b[^>]*data-faq[^>]*>\s*<summary>(.*?)<\/summary>\s*<p>(.*?)<\/p>\s*<\/details>/gs)].map(m=>({question:decodeHtml(m[1]),answer:decodeHtml(m[2])}));
  minimumFaqs=Math.min(minimumFaqs,visibleFaqs.length);
  if(faqSections.length!==1||visibleFaqs.length<15)errors.push(`${label}: expected one FAQ section with at least 15 answers, found ${visibleFaqs.length}`);
  if(new Set(visibleFaqs.map(f=>f.question.trim().toLowerCase())).size!==visibleFaqs.length)errors.push(`${label}: duplicate FAQ question`);
  if(faqSections.length&& !html.slice(html.indexOf(faqSections[0][0])+faqSections[0][0].length).startsWith('</main>'))errors.push(`${label}: FAQs must be the last main-content section`);
  const faqSchema=[...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].flatMap(m=>{try{return JSON.parse(m[1])['@graph']||[];}catch{return [];}}).filter(s=>s['@type']==='FAQPage');
  const schemaFaqs=faqSchema[0]?.mainEntity?.map(q=>({question:q.name,answer:q.acceptedAnswer?.text}));
  if(faqSchema.length!==1||JSON.stringify(schemaFaqs)!==JSON.stringify(visibleFaqs))errors.push(`${label}: FAQ schema differs from visible answers`);
  for(const match of html.matchAll(/(?:href|src)="(\/[^"?#]*)(?:[^\"]*)"/g)){
    const target=decodeURIComponent(match[1]);if(target.startsWith('//'))continue;links++;
    const candidates=[path.join(root,target),path.join(root,target,'index.html')];
    if(!(await Promise.all(candidates.map(p=>fs.stat(p).then(s=>s.isFile()).catch(()=>false)))).some(Boolean))errors.push(`${label}: missing ${target}`);
  }
  const pagePhotos = new Set();
  // Count rendered images and video posters, not responsive sources or social metadata.
  for(const match of html.matchAll(/<(?:img|video)\b[^>]*>/g)){
    const tag=match[0];
    if(tag.startsWith('<img')&&(!/\balt=/.test(tag)||!/\bwidth=/.test(tag)||!/\bheight=/.test(tag)))errors.push(`${label}: image missing alt/dimensions`);
    const source=tag.match(/\b(?:src|poster)="([^"]+)"/)?.[1];
    if(!source)continue;
    const photo=source.split(/[?#]/)[0].replace(/-(480|800|1200)\.webp$/,'.webp');
    if(pagePhotos.has(photo))errors.push(`${label}: repeated photograph ${photo}`);
    pagePhotos.add(photo);
  }
}
const sitemap=await fs.readFile(path.join(root,'sitemap.xml'),'utf8');
const routes=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>new URL(m[1]).pathname);
if(routes.length!==htmlFiles.length-1)errors.push(`Sitemap ${routes.length} vs HTML ${htmlFiles.length-1}`);
for(const route of routes){if(!await fs.stat(path.join(root,route,'index.html')).then(s=>s.isFile()).catch(()=>false))errors.push(`Sitemap target missing: ${route}`);}
console.log(JSON.stringify({pages:htmlFiles.length,sitemapRoutes:routes.length,checkedLocalReferences:links,jsonLdBlocks:schemas,minimumFaqsPerPage:minimumFaqs,errors},null,2));
if(errors.length)process.exit(1);
