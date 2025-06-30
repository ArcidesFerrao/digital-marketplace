import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cxnq6dfzcf.ufs.sh',
        pathname: '/f/**',
      },
    ],
  },
};

export default nextConfig;
