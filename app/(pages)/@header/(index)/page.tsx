import Image from 'next/image'
import styles from './home-header.module.css'

export default function HomeHeader() {
  return (
    <div className={styles.heading}>
      <Image
        src='/design/bluecircle.svg'
        alt='Blue Circle'
        width={160}
        height={40}
        className={styles.image}
      />
      <h1 className={styles.text}>Ethan G.</h1>
    </div>
  )
}
