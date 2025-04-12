import * as React from 'react'
import {clsx} from 'clsx'
import styles from './layoutoutline.module.css'

type Props = {
  name: string
  children: React.ReactNode
  type: 'page' | 'layout'
}

const RENDER = false

export default function Outline({name, children, type}: Props) {
  if (!RENDER) return <>{children}</>

  return (
    <div className={clsx(styles['layout-outline'], styles[type])}>
      <div className={styles['label-container']}>
        <div className={styles.label}>{name}</div>
      </div>
      {children}
    </div>
  )
}
