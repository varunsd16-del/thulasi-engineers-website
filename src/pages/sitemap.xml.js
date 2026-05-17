import { getCollection } from 'astro:content';
import { categories } from '../app/constants/blog.ts';

const site = 'https://thulasiengineers.com';

const staticPages = [
  '',
  'about',
  'services',
  'projects',
  'areas-we-serve',
  'why-us',
  'contact',
  'knowledge-base',
  'civil-engineers-in-trichy',
  'construction-company-trichy',
  'construction-cost-in-trichy',
  'residential-construction-trichy'
];

const serviceDetails = [
  'services/building-construction',
  'services/architecture-planning',
  'services/industrial-construction',
  'services/infrastructure-development',
  'services/project-management',
  'services/renovation-remodeling',
  'services/safety-management',
  'services/sustainable-construction'
];

const projectDetails = [
  'projects/villa-construction-srirangam',
  'projects/commercial-building-thillai-nagar',
  'projects/house-construction-kk-nagar'
];

const locations = [
  'srirangam',
  'thillai-nagar',
  'kk-nagar',
  'woraiyur',
  'cantonment',
  'karumandapam',
  'puthur',
  'tiruverumbur',
  'samayapuram',
  'golden-rock',
  'lalgudi',
  'manapparai',
  'thuvakudi'
];

const serviceSlugs = [
  'construction-company',
  'builders',
  'civil-engineers',
  'home-renovation'
];

export async function GET() {
  const allUrls = [];

  // 1. Static Pages
  staticPages.forEach(p => {
    allUrls.push(`${site}/${p}`);
  });

  // 2. Services Detail Pages
  serviceDetails.forEach(s => {
    allUrls.push(`${site}/${s}`);
  });

  // 3. Projects Case Studies
  projectDetails.forEach(pr => {
    allUrls.push(`${site}/${pr}`);
  });

  // 4. Dynamic Hyper-Local SEO landing pages (52 URLs)
  serviceSlugs.forEach(service => {
    locations.forEach(loc => {
      allUrls.push(`${site}/${service}-in-${loc}`);
    });
  });

  // 5. Dynamic Blog categories
  categories.forEach(cat => {
    allUrls.push(`${site}/blog/${cat.slug}`);
  });

  // 6. Dynamic Blog Posts from Content Collection
  try {
    const blogPosts = await getCollection('blog');
    blogPosts.forEach(post => {
      allUrls.push(`${site}/blog/${post.data.category}/${post.slug}`);
    });
  } catch (err) {
    console.error('Sitemap Content Collection Fetch Error:', err);
  }

  // Generate XML
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls.map(url => `
    <url>
      <loc>${url.endsWith('/') ? url : url + '/'}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>${url === site + '/' ? 'daily' : 'weekly'}</changefreq>
      <priority>${url === site + '/' ? '1.0' : url.includes('/services/') || url.includes('/projects/') ? '0.8' : '0.6'}</priority>
    </url>
  `).join('')}
</urlset>`.trim();

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  });
}
