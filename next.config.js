/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_MAP_ACCESS_TOKEN : process.env.NEXT_PUBLIC_MAP_ACCESS_TOKEN,
    NEXT_PUBLIC_MAP_STYLE_URL: process.env.NEXT_PUBLIC_MAP_STYLE_URL
  }
}

module.exports = nextConfig
