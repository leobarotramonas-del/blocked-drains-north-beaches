import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { services } from '../data/services';
import { areas } from '../data/areas';
import { guides } from '../data/guides';
const routes = ['/', '/services', '/service-areas', '/about', '/contact', '/our-work', '/drain-advice', '/privacy', '/terms', ...services.map(s=>`/services/${s.slug}`), ...areas.map(a=>`/service-areas/${a.slug}`), ...guides.map(g=>`/drain-advice/${g.slug}`)];
export const GET: APIRoute = () => new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(r=>`<url><loc>${new URL(r,site.url).href}</loc></url>`).join('')}</urlset>`, {headers:{'Content-Type':'application/xml; charset=utf-8'}});
