/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.thedirect.com',
          },
          {
            protocol: 'https',
            hostname: 'mir-s3-cdn-cf.behance.net',
          },
        ],
      },
}

module.exports = nextConfig
