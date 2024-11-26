import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Ensures stricter checks for better error handling
  images: {
    // Allow images from specific local patterns
    domains: [], // You can specify external domains here if needed
    remotePatterns: [
      {
        protocol: 'http',  // Specify the protocol if needed
        hostname: 'localhost',  // Change this to your actual hostname if necessary
        pathname: '/assets/images/**', // This pattern matches all images under /assets/images/
      },
    ],
  },
};

export default nextConfig;
