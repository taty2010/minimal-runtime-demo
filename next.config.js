/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./loader.js",
    // unoptimized: true,
  },
};

module.exports = nextConfig;
