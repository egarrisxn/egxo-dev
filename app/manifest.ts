import type {MetadataRoute} from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'egxo.dev',
    short_name: 'egxo',
    description: 'Full Stack Developer. Digital Product Designer.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fcf5ff',
    theme_color: '#fcf5ff',
    icons: [
      {
        src: '/favicon/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/favicon/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
