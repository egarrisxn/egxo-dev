'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { MonitorIcon, MoonIcon, SunIcon } from './icons'
import { AnimatedBackground } from '@/components/ui/animated-background'

const THEMES_OPTIONS = [
  {
    label: 'Light',
    id: 'light',
    icon: <SunIcon className="size-4" />,
  },
  {
    label: 'Dark',
    id: 'dark',
    icon: <MoonIcon className="size-4" />,
  },
  {
    label: 'System',
    id: 'system',
    icon: <MonitorIcon className="size-4" />,
  },
]

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <AnimatedBackground
      className="pointer-events-none rounded-lg bg-accent"
      defaultValue={theme}
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.2,
      }}
      enableHover={false}
      onValueChange={(id) => {
        setTheme(id as string)
      }}
    >
      {THEMES_OPTIONS.map((theme) => {
        return (
          <button
            key={theme.id}
            className="inline-flex size-7 items-center justify-center text-muted-foreground transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-foreground dark:text-muted-foreground dark:data-[checked=true]:text-foreground"
            type="button"
            aria-label={`Switch to ${theme.label} theme`}
            data-id={theme.id}
          >
            {theme.icon}
          </button>
        )
      })}
    </AnimatedBackground>
  )
}
