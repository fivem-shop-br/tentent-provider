/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    pageExtensions: ["page.tsx"],
    images: {
        domains: ["five-m.store"],
    },
};

module.exports = nextConfig;