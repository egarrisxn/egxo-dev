import { Link } from 'next-view-transitions'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react'
import clsx from 'clsx'

type Variant = 'back' | 'see-more' | 'external'

interface SmartLinkProps {
  href: string
  text: string
  variant?: Variant
}

const icons: Record<Variant, LucideIcon> = {
  back: ArrowLeft,
  'see-more': ArrowRight,
  external: ArrowUpRight,
}

export function SmartLink({
  href,
  text,
  variant = 'see-more',
}: SmartLinkProps) {
  const Icon = icons[variant]

  const isExternal = variant === 'external'
  const Wrapper = isExternal ? 'a' : Link

  const baseClasses =
    'group relative flex flex-row items-center gap-1 transition-colors'
  const textClasses = clsx('font-medium', {
    'text-foreground/90 group-hover:text-foreground': variant !== 'external',
    'text-sky-600 group-hover:text-sky-700 dark:text-sky-400 dark:group-hover:text-sky-500':
      variant === 'external',
  })

  const iconClasses = clsx(
    'mt-0.5 transition-all duration-300 ease-out',
    variant === 'back' &&
      'translate-x-0.5 text-foreground group-hover:-translate-x-0.5 group-hover:scale-x-105',
    variant === 'see-more' &&
      '-translate-x-0.5 text-foreground group-hover:translate-x-0.5 group-hover:scale-x-105',
    variant === 'external' &&
      'group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105 text-sky-600 group-hover:text-sky-700 dark:text-sky-400 dark:group-hover:text-sky-500',
  )

  return (
    <Wrapper
      href={href}
      {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
      className={baseClasses}
    >
      {variant === 'back' && (
        <Icon width={16} height={16} strokeWidth={2} className={iconClasses} />
      )}
      <p className={textClasses}>{text}</p>
      {variant !== 'back' && (
        <Icon
          width={16}
          height={16}
          strokeWidth={variant === 'external' ? 2.5 : 2}
          className={iconClasses}
        />
      )}
    </Wrapper>
  )
}
