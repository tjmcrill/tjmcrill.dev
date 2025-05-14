import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://pub-8fca6f18df694a81be6540a465c4c7bf.r2.dev/*')],
  },
};

export default nextConfig;
