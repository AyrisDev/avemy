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
  async rewrites() {
    return [
      {
        source: "/api/event",
        destination: "http://plausible-vcwggswcogs8c04kwsocs84k.65.109.236.58.sslip.io/api/event",
      },
    ];
  },
};

export default nextConfig;
