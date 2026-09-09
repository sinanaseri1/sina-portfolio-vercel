/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    // Lint runs as part of the build; it currently passes clean.
    dirs: ['app', 'components', 'lib', 'hooks'],
  },
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;
