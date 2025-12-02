'use client'

import { Button } from '@/components/ui/button'

interface PaintCanvasPaletteProps {
  colors: string[]
  selectedColor: string
  onColorSelect: (color: string) => void
}

export default function PaintCanvasPalette({
  colors,
  selectedColor,
  onColorSelect,
}: PaintCanvasPaletteProps) {
  return (
    <div className="flex border-t border-accent-foreground/40 bg-card p-1">
      <section className="flex flex-wrap gap-1">
        {colors.map((c) => (
          <Button
            key={c}
            variant="ghost"
            className={`size-5.5 min-w-0 cursor-pointer p-0 sm:size-4.5 md:size-5.5 ${
              selectedColor === c ? 'ring-1 ring-blue-600' : ''
            }`}
            style={{ backgroundColor: c }}
            onClick={() => onColorSelect(c)}
          />
        ))}
      </section>
    </div>
  )
}
