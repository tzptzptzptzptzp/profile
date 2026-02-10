import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.NODE_ENV === "production" ? "/profile" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/profile/" : "",
  images: {
    domains: ["bsj-api.vercel.app"],
    unoptimized: true,
  },
};

export default nextConfig;
