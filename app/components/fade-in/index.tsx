import {ReactNode} from 'react'
import styles from './fade-in.module.css'

type Props = {
  children: ReactNode
  duration?: number
  delay?: number
  className?: string
}

export default function FadeIn({duration = 300, delay = 0, children, className}: Props) {
  return (
    <div
      style={{
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
      }}
      className={`${className} ${styles.fadeIn}`}
    >
      {children}
    </div>
  )
}
