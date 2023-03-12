/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      'earthrescueapp86f99fff52054333859d656cc532c1c6182401-dev.s3.us-east-1.amazonaws.com',
      'earthrescueapp86f99fff52054333859d656cc532c1c6182401-uat.s3.us-east-1.amazonaws.com',
      'earthrescueapp86f99fff52054333859d656cc532c1c6182401-prod.s3.us-east-1.amazonaws.com',
    ],
  },
};

module.exports = nextConfig;
