import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  poweredByHeader: false,
  images: {
    domains: [],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Powered-By',
            value: 'RoyHgstrm',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
