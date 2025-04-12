import Image from 'next/image'
import Link from '../link'
import Badge from '../badge'
import styles from './entry.module.css'

type Props = {
  href: string
  title: string
  description: string
  role?: string
  image: string
  years: string[]
  showYears: boolean
  stars?: number
}

export const Entry = ({href, title, description, image, years, showYears = true}: Props) => (
  <>
    <li className={styles.wrapper}>
      <div className={styles.head}>
        <p className={styles.title}>
          <Link href={href} external={true}>
            {title}
          </Link>
        </p>
        <div className={styles.badges}>
          {showYears && (
            <Badge>
              {years[0]} {years[1] ? '-' : ''} {years[1]}
            </Badge>
          )}
        </div>
      </div>
      <div className={styles.body}>
        <Image className={styles.image} src={image} width={170} height={100} alt={title} />
        <div className={styles.description}>{description}</div>
      </div>
    </li>
    <hr />
  </>
)
