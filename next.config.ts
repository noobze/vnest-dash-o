import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  /* config options here */
  images : {
    remotePatterns : [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '*/**',
        search: '',
      },
    ]
  }
};

export default nextConfig;
