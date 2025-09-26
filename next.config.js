// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',        // Static export
//   basePath: '/iha',        // Subfolder
//   assetPrefix: '/iha/',    // For CSS/JS paths
//   reactStrictMode: true,
// }
 
// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // ← enables static export
  images: {
    unoptimized: true,       // required for next/image in static export
  },
};

module.exports = nextConfig;

 