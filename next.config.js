/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.thedirect.com',
          },
        ],
      },
}

module.exports = nextConfig
