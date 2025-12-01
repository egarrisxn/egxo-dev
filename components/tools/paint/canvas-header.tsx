'use client'

import { Button } from '@/components/ui/button'

interface CanvasHeaderProps {
  onMinimize: () => void
  onClose: () => void
  onNew: () => void
}

export function CanvasHeader({
  onMinimize,
  onClose,
  onNew,
}: CanvasHeaderProps) {
  return (
    <header>
      <section className="flex items-center justify-between rounded-t bg-blue-600/90 px-2 py-1 text-card">
        <p className="text-sm font-medium text-card dark:font-semibold">
          Paint Canvas
        </p>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            className="size-5 min-w-0 cursor-pointer p-0 text-card hover:bg-blue-600"
            onClick={onMinimize}
          >
            -
          </Button>
          <Button
            variant="ghost"
            className="size-5 min-w-0 cursor-pointer p-0 text-card hover:bg-blue-600"
            onClick={onClose}
          >
            x
          </Button>
        </div>
      </section>
      <section className="bg-card p-1 text-sm font-medium text-card-foreground/90">
        <span
          className="cursor-pointer px-1.5 py-0.5 hover:text-card-foreground"
          onClick={onNew}
        >
          New
        </span>
        <a
          href="https://github.com/egarrisxn/mississippi-paint"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer px-1.5 py-0.5 hover:text-card-foreground"
        >
          Help
        </a>
      </section>
    </header>
  )
}
