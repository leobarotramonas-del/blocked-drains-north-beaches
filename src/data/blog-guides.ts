import posts from './week-one-articles.json';
export interface BlogGuide { path:string; title:string; description:string; category:string; date?:string; image:string; imageAlt:string; service?:string }
import { guides } from './guides';
import { services } from './services';
export async function getBlogGuides():Promise<BlogGuide[]> {
 const recent:BlogGuide[]=posts.map(p=>({...p}));
 const older:BlogGuide[]=guides.map(g=>{const s=services.find(s=>s.slug===g.service)!;return {path:'/drain-advice/'+g.slug,title:g.title,description:g.description,category:s.name,service:'/services/'+s.slug,image:'/images/'+s.image+'-800.webp',imageAlt:s.alt};});
 const unique=new Map<string,BlogGuide>();
 for(const p of [...recent,...older]){const key=p.path.replace(/\/$/,'');if(!unique.has(key))unique.set(key,p);}
 return [...unique.values()].sort((a,b)=>(Date.parse(b.date||'')||0)-(Date.parse(a.date||'')||0));
}
