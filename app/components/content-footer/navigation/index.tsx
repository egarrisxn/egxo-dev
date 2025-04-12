import Link from '../../link'
import styles from './navigation.module.css'
import type {Thought, Post} from '@/lib/types'

export default function Navigation({
  previous,
  next,
}: {
  previous?: Thought | Post
  next?: Thought | Post
}) {
  return (
    <nav className={styles.navigation}>
      <div className={styles.previous}>
        {previous && (
          <Link href={`./${previous.slug}`}>
            <div className={styles.title}>←</div>
            {previous.title}
          </Link>
        )}
      </div>

      <div className={styles.next}>
        {next && (
          <Link href={`./${next.slug}`}>
            <div className={styles.title}>→</div>
            {next.title}
          </Link>
        )}
      </div>
    </nav>
  )
}
