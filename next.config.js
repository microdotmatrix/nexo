/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'dummyimage.com',
      'images.unsplash.com',
      'via.placeholder.com',
      'www.notion.so',
      'notion.so',
      'wsrv.nl'
    ],
    formats: ['image/avif', 'image/webp']
  },
  experimental: {
    serverActions: true,
  },
  transpilePackages: [
    '@iconify/json',
    '@ariakit/react'
  ],
}

module.exports = nextConfig
