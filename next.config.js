/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Disable image optimization during development
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
  },
  // Ensure proper handling of trailing slashes
  trailingSlash: false,
}

module.exports = nextConfig
