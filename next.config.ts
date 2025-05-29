import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
  domains: ['cdn.sanity.io'],
 },
 compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
