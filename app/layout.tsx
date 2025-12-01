import * as React from 'react'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ViewTransitions } from 'next-view-transitions'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from '@/context/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { SITE_URL, SITE_TITLE, SITE_DESC, SITE_HANDLE } from '@/lib/config'
import './globals.css'

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  title: {
    default: SITE_TITLE,
    template: '%s | egxo',
  },
  description: SITE_DESC,
  applicationName: SITE_TITLE,
  referrer: 'origin-when-cross-origin',
  keywords: [
    'typescript',
    'javascript',
    'nextjs',
    'react',
    'tailwindcss',
    'mdx',
    'shadcnui',
    'vercel',
    'motion',
    'motion-primitives',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: SITE_TITLE,
    description: SITE_DESC,
    url: SITE_URL,
    siteName: SITE_TITLE,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESC,
    creator: SITE_HANDLE,
    site: SITE_HANDLE,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'e9eff6' },
    { media: '(prefers-color-scheme: dark)', color: '#071119' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta name="apple-mobile-web-app-title" content={SITE_TITLE} />
        </head>

        <body
          className={`${geist.variable} ${geistMono.variable} font-sans tracking-tight antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster position="bottom-right" richColors />
          </ThemeProvider>
          <Analytics />
        </body>
      </html>
    </ViewTransitions>
  )
}
