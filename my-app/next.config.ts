/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/xavortree",
        permanent: false,
      },
      {
        source: "/articles",
        destination: "/xavortree/articles",
        permanent: false,
      },
      {
        source: "/articles/:slug",
        destination: "/xavortree/articles/:slug",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;