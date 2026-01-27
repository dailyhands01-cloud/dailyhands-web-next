/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Required for Firebase static hosting
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),

  images: {
    unoptimized: true,
  },

  // Prevents routing issues on refresh
  trailingSlash: true,
};

module.exports = nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     unoptimized: true
//   },
//   trailingSlash: true
// };

// module.exports = nextConfig;
