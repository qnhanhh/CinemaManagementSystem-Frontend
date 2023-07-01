/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects(){
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
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
