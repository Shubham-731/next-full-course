/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => [
    {
      source: "/about",
      destination: "/login",
      permanent: true,
    },
    {
      source: "/old-url/[blogId]",
      destination: "/new-url/[blogId]",
      permanent: false,
    },
  ],
};

module.exports = nextConfig;
