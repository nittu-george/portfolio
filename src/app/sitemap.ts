import type {MetadataRoute} from 'next';
import {profile,projects} from '@/data/portfolio';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap {if(!profile.siteUrl)return [];return ['','/portfolio','/about','/contact',...projects.filter(p=>p.status!=='Draft').map(p=>'/portfolio/'+p.slug)].map(path=>({url:profile.siteUrl.replace(/\/$/,'')+path}));}
