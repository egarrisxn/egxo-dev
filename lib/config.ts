function getSiteUrl() {
  const rawUrl = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL
  const devUrl = 'http://localhost:3000'

  return (rawUrl || devUrl).replace(/\/$/, '') // Strip trailing slash
}

export const SITE_URL = getSiteUrl()

export const SITE_TITLE = 'egxo.dev'
export const SITE_DESC = 'Full Stack Developer. Digital Product Designer.'
export const SITE_HANDLE = '@eg___xo'

// For CORS / APIs / etc.
export const SITE_PRODUCTION_URL = 'https://egxo.dev'
