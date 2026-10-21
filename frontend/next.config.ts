import type { NextConfig } from 'next'

const BACKEND_URL = process.env.BACKEND_URL ?? 'meetmap-xg53.vercel.app'

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${BACKEND_URL}/:path*`,
      },
    ]
  },
}

export default nextConfig
