import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/DAO.html",
        destination: "/dao",
        permanent: true,
      },
      {
        source: "/bizcanvas.html",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
