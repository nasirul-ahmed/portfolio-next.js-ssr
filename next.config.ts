import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // typedRoutes: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
