'use client'

import Image from 'next/image'
import { Link } from 'next-view-transitions'
import { TextEffect } from '@/components/ui/text-effect'
import { SmartLink } from '@/components/ui/smart-link'
import { usePathname } from 'next/navigation'
import { NAV_LINKS } from '@/lib/data'

export function Header() {
  const pathname = usePathname()
  const showBack = pathname !== '/'

  return (
    <div className="z-50">
      {showBack && (
        <div className="absolute top-6 left-2">
          <SmartLink href="/" text="Back" variant="back" />
        </div>
      )}

      <div className="absolute top-6 right-4">
        <nav
          className="flex flex-row items-center gap-2.5 pt-[2.5px] text-[0.9rem] leading-normal font-medium tracking-tight text-foreground/80"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`underline-offset-4 transition-colors hover:text-foreground ${
                  isActive ? 'text-foreground underline underline-offset-4' : ''
                }`}
              >
                {label}
              </Link>
            )
          })}
        </nav>
      </div>

      <header className="mb-2 flex items-center justify-start gap-2">
        <section>
          <Image
            src="/face.svg"
            alt="my face"
            width={50}
            height={50}
            priority
          />
        </section>
        <section>
          <Link
            href="/"
            className="font-bold text-foreground/80 hover:text-foreground"
          >
            ★ ★ ★ Ethan G.
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-accent-foreground/80"
            delay={0.5}
          >
            Developer // Designer
          </TextEffect>
        </section>
      </header>
    </div>
  )
}
