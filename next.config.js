/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['your-domain.com'], // Add your image domain here
    formats: ['image/webp'],
  },
}

module.exports = nextConfig
