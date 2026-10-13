import { chromium } from 'playwright-core';
import fs from 'node:fs/promises';
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const results=[];
for(const route of ['/','/services/cctv-drain-inspections','/service-areas/manly','/our-work']){
  const context=await browser.newContext({viewport:{width:390,height:844},deviceScaleFactor:1,isMobile:true});
  const page=await context.newPage();const cdp=await context.newCDPSession(page);
  await cdp.send('Network.enable');await cdp.send('Network.setCacheDisabled',{cacheDisabled:true});
  await cdp.send('Network.emulateNetworkConditions',{offline:false,latency:150,downloadThroughput:200000,uploadThroughput:93750});
  await cdp.send('Emulation.setCPUThrottlingRate',{rate:4});
  await page.addInitScript(()=>{window.__metrics={lcp:0,cls:0,lcpElement:''};new PerformanceObserver(l=>{for(const e of l.getEntries()){window.__metrics.lcp=e.startTime;window.__metrics.lcpElement=e.element?.tagName+' '+(e.element?.className||'')}}).observe({type:'largest-contentful-paint',buffered:true});new PerformanceObserver(l=>{for(const e of l.getEntries())if(!e.hadRecentInput)window.__metrics.cls+=e.value}).observe({type:'layout-shift',buffered:true});});
  await page.goto(`http://127.0.0.1:4335${route}`,{waitUntil:'networkidle'});
  await page.waitForTimeout(1000);
  const metrics=await page.evaluate(()=>({...window.__metrics,resources:performance.getEntriesByType('resource').map(e=>({name:new URL(e.name).pathname,bytes:e.transferSize,type:e.initiatorType}))}));
  results.push({route,lcpMs:Math.round(metrics.lcp),lcpElement:metrics.lcpElement,cls:Number(metrics.cls.toFixed(4)),resourceBytes:metrics.resources.reduce((s,e)=>s+e.bytes,0),externalScriptBytes:metrics.resources.filter(e=>e.type==='script').reduce((s,e)=>s+e.bytes,0),videoRequests:metrics.resources.filter(e=>e.name.endsWith('.mp4')).length});
  await context.close();
}
await browser.close();await fs.writeFile('.impeccable/review/performance.json',JSON.stringify({conditions:'Local production preview, fresh cache, 390x844, 1.6Mbps download, 150ms latency, 4x CPU slowdown. Lab observations, not field Core Web Vitals or Lighthouse scores.',results},null,2));
console.log(JSON.stringify(results,null,2));
