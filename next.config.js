/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["raw.githubusercontent.com"],
  },
};

module.exports = nextConfig;
