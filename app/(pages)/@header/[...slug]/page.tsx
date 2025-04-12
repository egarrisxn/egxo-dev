'use client'

import React, {useMemo} from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import styles from './styles.module.css'

export default function BreadcrumbPage() {
  const pathname = usePathname()
  const breadcrumbs = useMemo(() => {
    if (!pathname) return

    const homeLink = (
      <li style={{listStyle: 'none'}} key='first'>
        <Link href='/' title='home'>
          home{' '}
        </Link>
        -
      </li>
    )

    const parts = pathname?.split('/').filter(Boolean)
    if (parts?.length === 0) return

    return [
      homeLink,
      ...parts.map((part, index) => {
        const href = `/${parts.slice(0, index + 1).join('/')}`
        const key = `breadcrumb-${part}` // Assign a unique key to each list item
        return (
          <React.Fragment key={key}>
            {index > 0 && ( // Don't render the span for the first item
              <span key={`${part}-span`} aria-hidden style={{color: 'var(--neutral)'}}>
                {' '}
                -{' '}
              </span>
            )}
            <li style={{listStyle: 'none'}} key={key}>
              <Link href={href}>{part}</Link>
            </li>
          </React.Fragment>
        )
      }),
    ]
  }, [pathname])

  return (
    <nav>
      <ol className={styles.list}>{breadcrumbs}</ol>
    </nav>
  )
}
