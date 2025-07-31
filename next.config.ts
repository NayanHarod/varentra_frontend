import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,  
},
  typescript: {
    ignoreBuildErrors: true, // This is generally not recommended, but can be useful during development
  },
  eslint: {
    ignoreDuringBuilds: true, // This is generally not recommended, but can be useful
  },
}
export default nextConfig;
