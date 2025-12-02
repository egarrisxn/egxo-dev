import * as React from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative mx-auto grid min-h-dvh w-full max-w-4xl grid-rows-[auto_1fr_auto] px-2 pt-20 xl:px-0">
      <Header />
      <main className="grid px-4">{children}</main>
      <Footer />
    </div>
  )
}
