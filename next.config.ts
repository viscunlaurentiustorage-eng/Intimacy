import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  allowedDevOrigins: ["192.168.178.160"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
