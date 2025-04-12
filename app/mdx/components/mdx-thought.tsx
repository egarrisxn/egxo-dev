import Info from '@/components/icons/other/info'
import styles from './mdx-thought.module.css'

export function MDXThought({children, ...props}: React.HTMLAttributes<HTMLElement>) {
  return (
    <aside {...props} className={styles.note}>
      <div className={styles.icon}>
        <Info />
      </div>
      <div className={styles.content}>
        <b>Note: </b>
        {children}
      </div>
    </aside>
  )
}
