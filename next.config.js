/** @type {import('next').NextConfig} */
const nextConfig = {
  mages: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tomekbielicki-nextjs-demo-users-image.s3.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
