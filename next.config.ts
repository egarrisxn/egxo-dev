import type { NextConfig } from 'next'

import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  reactCompiler: true,
  // cacheComponents: true,
  // experimental: {
  //   globalNotFound: true,
  //   turbopackFileSystemCacheForDev: true,
  // }
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
