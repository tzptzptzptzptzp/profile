import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    domains: ["bsj-api.vercel.app"],
    unoptimized: true,
  },
};

export default nextConfig;
