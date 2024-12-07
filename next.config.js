/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  reactStrictMode: true
};

module.exports = nextConfig;
