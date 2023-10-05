const headers = require("./headers");

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  typescript: {
    // ignoreBuildErrors: true,
  },
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers,
      },
    ];
  },
};
