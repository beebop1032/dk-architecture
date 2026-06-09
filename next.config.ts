import type { NextConfig } from 'next'

const config: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 31536000,
  },
}
export default config
