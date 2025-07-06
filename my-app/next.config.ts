import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // 스크롤 복원 기능 비활성화
  experimental: {
    scrollRestoration: false
  }
};

export default nextConfig;
