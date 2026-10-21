import type { NextConfig } from 'next'

// 주소 끝에 /가 붙어 있어도 제거해서 //가 생기지 않게 함
const BACKEND_URL = (
  process.env.BACKEND_URL ?? 'https://meetmap-xg53.vercel.app'
).replace(/\/+$/, '')

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
