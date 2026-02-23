import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/ward-services-site",
  assetPrefix: "/ward-services-site",
};

export default nextConfig;
