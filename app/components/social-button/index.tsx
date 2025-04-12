'use client'

import {track} from '@vercel/analytics/react'
import Tooltip from '../tooltip'
import Link from '../link'
import styles from './socialbutton.module.css'

type Props = {
  href: string
  icon: React.ReactNode
  tooltip: string
}

export function SocialButton({tooltip, href, icon}: Props) {
  return (
    <Tooltip text={tooltip} direction='top'>
      <Link
        href={href}
        className={styles.socialButton}
        external
        onClick={() =>
          track('clicked social link', {
            type: tooltip.toLowerCase(),
          })
        }
      >
        {icon}
      </Link>
    </Tooltip>
  )
}
