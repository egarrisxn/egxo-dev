import Link from '../link'
import styles from './techbadge.module.css'

export function TechBadge({href, label, icon, children}) {
  return (
    <Link external href={href} aria-label={label} className={styles.techBadge}>
      {icon}
      {children}
    </Link>
  )
}
