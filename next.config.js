// eslint-disable-next-line @typescript-eslint/no-var-requires
const withSvgr = require('next-plugin-svgr')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['ahooks'],
  webpack: config => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  }
}

module.exports = withSvgr(nextConfig)
