module.exports = {
  siteUrl: 'https://dailyhands.in', // change to your domain
  generateRobotsTxt: false,
  changefreq: 'daily',
  priority: 1,
  generateIndexSitemap: false,
  transform: async (config, path) => {
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === '/') {
      priority = 1.0;
    } else if (path === '/service') {
      priority = 0.9;
    } else if (
      ['/about', '/contact', '/pricing', '/blog'].includes(path) ||
      path.includes('-cleaning') ||
      path === '/project'
    ) {
      priority = 0.8;
    } else if (['/team', '/faq', '/gallery', '/gallery-feed', '/client'].includes(path) || path.startsWith('/blog/')) {
      priority = 0.8;
    } else {
      priority = 0.8;
    }

    return {
      loc: path,
      changefreq: changefreq,
      priority: priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
};
