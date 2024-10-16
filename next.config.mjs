/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "bucket1.glanacion.com",
      },
    ],
  },
};

export default nextConfig;
