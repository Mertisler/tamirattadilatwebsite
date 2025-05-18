/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      unoptimized: true,
      domains: ['images.unsplash.com'],
    },
    trailingSlash: true,
  };
  
  module.exports = nextConfig;
  