module.exports = {
  siteUrl: "https://dailyhands.in", // change to your domain
  exclude: ["/404", "/api/*", "/home"],
  generateIndexSitemap: false,
  sitemapsChunkSize: 50000,
  transform: async (config, path) => {
    let priority = 0.8;
    let changefreq = config.changefreq;

    if (path === "/") {
      priority = 1.0;
    } else if (path === "/service" || path === "/home") {
      priority = 0.9;
    } else if (
      [
        "/about",
        "/contact",
        "/pricing",
        "/blog",
        "/project",
        "/gallery",
        "/faq",
        "/testimonial",
        "/team",
      ].includes(path) ||
      path.includes("-cleaning") ||
      path.includes("-maid") ||
      path.includes("-service") ||
      path.includes("-housekeeping") ||
      path.includes("maid-near-me")
    ) {
      priority = 0.8;
    } else if (path.startsWith("/blog/")) {
      priority = 0.7;
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
