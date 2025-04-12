import Link from '../../link'
import styles from './footer.module.css'

export default function ContentFooter() {
  return (
    <>
      <hr style={{margin: 0}} />
      <footer className={styles.footer}>
        <p>
          Thank you for your time! Follow me on{' '}
          <Link external href='https://x.com/eg__xo'>
            X
          </Link>
          .
        </p>
      </footer>
    </>
  )
}
