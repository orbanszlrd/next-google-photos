/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
