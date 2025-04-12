import Link from 'next/link'
import {Arrow} from '@/components/icons/other'

export default function ViewResume() {
  return (
    <Link href='/resume' target='_blank' rel='noopener noreferrer'>
      Resume <Arrow />
    </Link>
  )
}
