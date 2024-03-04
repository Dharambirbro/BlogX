/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dwhpe0oqy/image/upload/**",
      },
    ],
  },
  env: { SERVER: "http://localhost:8080" },
};

export default nextConfig;
