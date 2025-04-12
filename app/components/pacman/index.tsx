import styles from './pacman.module.css'

export default function Pacman() {
  return (
    <div className={styles.loader}>
      <div className={styles.pacMan}></div>
      <div className={`${styles.point} ${styles.p1}`}></div>
      <div className={`${styles.point} ${styles.p2}`}></div>
    </div>
  )
}
