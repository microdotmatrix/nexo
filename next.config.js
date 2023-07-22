/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'dummyimage.com',
      'images.unsplash.com',
      'via.placeholder.com'
    ],
  },
  experimental: {
    serverActions: true,
  },
  transpilePackages: [
    '@iconify/react',
  ]
}

module.exports = nextConfig
