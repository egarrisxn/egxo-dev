import type { CSSProperties } from 'react'
import { hexToRgb, getButtonStyles } from '@/helpers/button-copy'
import type { ButtonGroups } from '@/lib/types'

interface ButtonGroupProps {
  group: ButtonGroups
  onCopy: (css: string) => void
}

export default function ButtonGroup({ group, onCopy }: ButtonGroupProps) {
  const sanitizedGroupName = group.name.toLowerCase().replace(/\s+/g, '')

  const baseButtonClasses =
    'relative px-6 py-3 font-semibold text-base cursor-pointer outline-none border-none transition-all duration-200 select-none w-full md:w-auto'

  return (
    <div className="flex flex-col gap-6 pb-6 text-card-foreground sm:rounded-2xl sm:border sm:border-accent-foreground/40 sm:bg-card sm:py-8 sm:shadow-md sm:ring-1 sm:ring-muted/50 sm:ring-inset">
      <div className="mx-auto text-lg leading-none font-medium sm:text-xl">
        {group.name}
      </div>
      <div className="mx-auto flex w-full max-w-md min-w-52 flex-col gap-4 px-2 sm:px-6">
        {group.variants.map((variant) => {
          const variantClass = variant.name
          const groupClass = sanitizedGroupName
          const rgbColor = hexToRgb(variant.color)
          return (
            <button
              key={variant.name}
              className={`${baseButtonClasses} ${groupClass} ${variantClass}`}
              onClick={() => onCopy(getButtonStyles(group.name, variant))}
              aria-label={`Copy ${variant.name} ${group.name} button style`}
              style={
                {
                  '--color': variant.color,
                  '--color-rgb': rgbColor,
                } as CSSProperties
              }
            >
              {variant.name}
            </button>
          )
        })}
      </div>
    </div>
  )
}
