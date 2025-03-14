export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
    },
    sitemap: 'https://egxo.dev/sitemap.xml',
    host: 'https://egxo.dev',
  }
}
