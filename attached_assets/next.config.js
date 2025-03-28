/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    domains: ['yokxyyeh.manus.space'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yokxyyeh.manus.space',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Skip TypeScript type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Skip ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
