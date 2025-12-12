import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/aix-website',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
