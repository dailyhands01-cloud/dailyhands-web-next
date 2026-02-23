module.exports = {
  siteUrl: "https://www.dailyhands.in", // change to your domain
  exclude: [
    "/404",
    "/api/*",
    "/home",
    "/home/",
    "/home-section",
    "/home-section/",
    "/blog-details",
    "/blog-details/",
    "/blog-grid",
    "/blog-grid/",
    "/blog-list",
    "/blog-list/",
    "/blog-standard",
    "/blog-standard/",
    "/service-grid",
    "/service-grid/",
    "/gallery-details",
    "/gallery-details/",
    "/gallerySection",
    "/gallerySection/",
    "/project-details",
    "/project-details/",
    "/team-details",
    "/team-details/",
    "/client",
    "/client/",
  ],
  generateIndexSitemap: false,
  sitemapsChunkSize: 50000,
  transform: async (config, path) => {
    let priority = 0.8;
    let changefreq = config.changefreq;

    if (path === "/") {
      priority = 1.0;
    } else if (path === "/service") {
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
