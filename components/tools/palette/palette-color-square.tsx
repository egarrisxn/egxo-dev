interface PaletteColorSquareProps {
  className?: string
  baseColor?: string
  hue?: string
}

export default function PaletteColorSquare({
  className,
  baseColor,
  hue,
}: PaletteColorSquareProps) {
  return (
    <div
      className={`${className} size-8 rounded`}
      style={{ backgroundColor: baseColor || hue }}
    />
  )
}
