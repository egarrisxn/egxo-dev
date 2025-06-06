import React, {ReactNode} from 'react'
import styles from './badge.module.css'

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  children: ReactNode
  width?: string | number
}

export default function Badge({children, className, width, ...props}: Props) {
  return (
    <div className={`${styles.badge} ${className ? className : ''}`} style={{width}} {...props}>
      {children}
    </div>
  )
}
