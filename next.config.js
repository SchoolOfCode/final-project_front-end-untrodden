/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_MAP_ACCESS_TOKEN : process.env.NEXT_PUBLIC_MAP_ACCESS_TOKEN,
  }
}

module.exports = nextConfig
