/* eslint-disable @typescript-eslint/no-unused-vars */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
