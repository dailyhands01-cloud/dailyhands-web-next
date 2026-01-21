// Dynamic robots.txt generator for Next.js
export default function handler(req, res) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com';

  const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`;

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(robots);
  res.end();
}
