import { Link } from 'next-view-transitions'
import clsx from 'clsx'
import type { LinkVariant, IconComponent } from '@/lib/types'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from '@/components/icons'

interface SmartLinkProps {
  href: string
  text: string
  variant?: LinkVariant
}

const icons: Record<LinkVariant, IconComponent> = {
  back: ArrowLeftIcon,
  more: ArrowRightIcon,
  external: ArrowUpRightIcon,
}

export function SmartLink({ href, text, variant = 'more' }: SmartLinkProps) {
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
      'translate-x-0.5 text-foreground size-4 group-hover:-translate-x-0.5 group-hover:scale-x-105',
    variant === 'more' &&
      '-translate-x-0.5 text-foreground size-4 group-hover:translate-x-0.5 group-hover:scale-x-105',
    variant === 'external' &&
      'group-hover:translate-x-0.5 group-hover:-translate-y-0.5 size-4.5 group-hover:scale-105 text-sky-600 group-hover:text-sky-700 dark:text-sky-400 dark:group-hover:text-sky-500',
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
