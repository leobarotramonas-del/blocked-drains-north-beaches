import { chromium } from 'playwright-core';
import fs from 'node:fs/promises';
import path from 'node:path';
await fs.mkdir('.impeccable/review',{recursive:true});
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const results=[];const interactions=[];
for(const [name,width,height] of [['desktop',1440,900],['mobile',390,844]]){
  const page=await browser.newPage({viewport:{width,height},deviceScaleFactor:1});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  for(const [route,label] of [['/','home'],['/services','services'],['/services/cctv-drain-inspections','service'],['/service-areas/manly','area'],['/service-areas','coverage'],['/our-work','work'],['/contact','contact']]){
    const response=await page.goto(`http://127.0.0.1:4335${route}`,{waitUntil:'networkidle'});
    await page.emulateMedia({reducedMotion:'reduce'});
    await page.evaluate(async()=>{for(let y=0;y<document.documentElement.scrollHeight;y+=700){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,25));}window.scrollTo(0,0);await document.fonts.ready;});
    const measurement=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,brokenImages:[...document.images].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src),h1:document.querySelector('h1')?.textContent,resourceBytes:performance.getEntriesByType('resource').reduce((s,e)=>s+e.transferSize,0),videoRequests:performance.getEntriesByType('resource').filter(e=>e.name.endsWith('.mp4')).length}));
    results.push({name,route,status:response.status(),...measurement,errors:[...errors]});
    await page.screenshot({path:path.resolve(`.impeccable/review/${label==='home'?name:`${label}-${name}`}.png`),fullPage:true});
    if(route==='/')await page.screenshot({path:path.resolve(`.impeccable/review/${name}-viewport.png`),fullPage:false});
    if(route==='/service-areas'){
      await page.locator('#area-search').fill('Dee Why');
      if(await page.locator('[data-area]:visible').count()!==1)throw new Error('Area search did not return Dee Why');
      await page.locator('#area-search').fill('not-a-suburb');
      if(!await page.locator('#no-results').isVisible())throw new Error('Search empty state missing');
      interactions.push({name,test:'Suburb search exact match and no-match recovery',passed:true});
    }
    if(route==='/'&&name==='mobile'){
      await page.locator('.mobile-menu summary').click();
      if(!await page.locator('.mobile-menu nav').isVisible())throw new Error('Mobile menu failed');
      await page.keyboard.press('Escape');
      if(await page.locator('.mobile-menu nav').isVisible())throw new Error('Escape did not close mobile menu');
      interactions.push({name,test:'Mobile menu opening and Escape dismissal',passed:true});
    }
    if(route==='/'){
      const disclosure=page.locator('.symptom-list details').nth(1);
      await disclosure.locator('summary').focus();await page.keyboard.press('Enter');
      if(!await disclosure.evaluate(el=>el instanceof HTMLDetailsElement && el.open))throw new Error('Keyboard disclosure failed');
      interactions.push({name,test:'Symptom disclosure opens with keyboard',passed:true});
    }
    if(route==='/our-work'){
      for(const video of await page.locator('video').all()){
        await video.evaluate(async el=>{if(el instanceof HTMLVideoElement){el.muted=true;await el.play();}});
        await page.waitForTimeout(300);
        if(!await video.evaluate(el=>el instanceof HTMLVideoElement && el.readyState>=2 && !el.error))throw new Error('Video playback failed');
        await video.evaluate(el=>{if(el instanceof HTMLVideoElement)el.pause();});
      }
      interactions.push({name,test:'Both local videos load and play on request',passed:true});
    }
  }
  await page.close();
}
await browser.close();
await fs.writeFile('.impeccable/review/browser-checks.json',JSON.stringify(results,null,2));
await fs.writeFile('.impeccable/review/interaction-checks.json',JSON.stringify(interactions,null,2));
console.log(JSON.stringify(results,null,2));
if(results.some(r=>r.overflow||r.brokenImages.length||r.errors.length||r.status!==200||r.videoRequests))process.exit(1);
