import type { NextConfig } from "next";
import { RemotePattern } from "next/dist/shared/lib/image-config";

const imageRemotePatternHttp: RemotePattern = {
  protocol: "http",
  hostname: "localhost",
  port: "1337",
  pathname: "/uploads/**",
}
const imageRemotePatternHttps: RemotePattern = {
  protocol: "https",
  hostname: "placehold.co",
}

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
      }
    ],
    // Strapi media URLs point at localhost in dev; optimizer rejects private IPs unless opted in.
    dangerouslyAllowLocalIP: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
