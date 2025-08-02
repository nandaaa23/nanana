import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add these two lines:
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;