import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'directus-qs8okkwwg80s8cwwo4oo44kk.65.109.236.58.sslip.io',
        port: '',
        pathname: '/assets/**',
      },
    ],
  },
};

export default nextConfig;
