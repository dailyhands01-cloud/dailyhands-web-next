// Dynamic sitemap.xml generator for Next.js
export default async function handler(req, res) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com';

  // List of static pages
  const staticPages = [
    { path: '', changefreq: 'weekly', priority: '1.0' },
    { path: 'about', changefreq: 'monthly', priority: '0.8' },
    { path: 'contact', changefreq: 'monthly', priority: '0.7' },
    { path: 'blog', changefreq: 'weekly', priority: '0.9' },
    { path: 'blog-grid', changefreq: 'weekly', priority: '0.8' },
    { path: 'blog-list', changefreq: 'weekly', priority: '0.8' },
    { path: 'pricing', changefreq: 'monthly', priority: '0.8' },
    { path: 'faq', changefreq: 'monthly', priority: '0.7' },
    { path: 'gallery-one', changefreq: 'monthly', priority: '0.7' },
    { path: 'gallery-two', changefreq: 'monthly', priority: '0.7' },
    { path: 'project', changefreq: 'monthly', priority: '0.8' },
    { path: 'service-one', changefreq: 'monthly', priority: '0.8' },
    { path: 'service-two', changefreq: 'monthly', priority: '0.8' },
    { path: 'team', changefreq: 'monthly', priority: '0.7' },
    { path: 'testimonial', changefreq: 'monthly', priority: '0.6' },
    { path: 'bedroom-cleaning', changefreq: 'monthly', priority: '0.8' },
    { path: 'car-cleaning', changefreq: 'monthly', priority: '0.8' },
    { path: 'commercial-cleaning', changefreq: 'monthly', priority: '0.8' },
    { path: 'house-cleaning', changefreq: 'monthly', priority: '0.8' },
    { path: 'office-cleaning', changefreq: 'monthly', priority: '0.8' },
    { path: 'window-cleaning', changefreq: 'monthly', priority: '0.8' },
  ];

  // Generate URL entries with proper XML structure
  const urls = staticPages.map((page) => {
    const loc = page.path === '' ? baseUrl : `${baseUrl}/${page.path}/`;
    return `  <url>
    <loc>${loc}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  }).join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate');
  res.write(sitemap);
  res.end();
}
