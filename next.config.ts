import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["assets.aceternity.com"], // Add the allowed domain here
  },
};

export default nextConfig;
