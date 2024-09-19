// const UnoCSS = require('@unocss/webpack').default

import UnoCSS from '@unocss/webpack'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.plugins.push(UnoCSS())
    return config
  },
}

export default nextConfig
