/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      unoptimized: true,
      domains: ['images.unsplash.com'],
    },
    basePath: process.env.NODE_ENV === 'production' ? '/tamirci3' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/tamirci3/' : '',
    trailingSlash: true,
  };
  
  module.exports = nextConfig;
  