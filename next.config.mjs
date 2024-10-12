/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  publicRuntimeConfig: {
    defaultTheme: 'dark',
  },
};

export default nextConfig;
