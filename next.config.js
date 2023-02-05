/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ["page.tsx"],
  images: {
    domains: ["static.fivem.website"],
  },
  env: {
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
