interface PaletteColorDetailsProps {
  hue: number
  saturation: number
  lightness: number
}

export default function PaletteColorDetails({
  hue,
  saturation,
  lightness,
}: PaletteColorDetailsProps) {
  return (
    <div className="ml-auto grid grid-cols-3 gap-2.5 lg:gap-4.5">
      <div className="flex flex-col items-center">
        <div className="text-xs tracking-tight text-muted-foreground lg:text-sm">
          H {hue}
        </div>
        <div className="h-1 w-12 overflow-hidden rounded-full bg-secondary lg:w-14">
          <div
            className="h-full bg-black dark:bg-primary"
            style={{ width: `${(hue / 360) * 100}%` }}
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-xs tracking-tight text-muted-foreground lg:text-sm">
          S {saturation}
        </div>
        <div className="h-1 w-12 overflow-hidden rounded-full bg-secondary lg:w-14">
          <div
            className="h-full bg-black dark:bg-primary"
            style={{ width: `${saturation}%` }}
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-xs tracking-tight text-muted-foreground lg:text-sm">
          L {lightness}
        </div>
        <div className="h-1 w-12 overflow-hidden rounded-full bg-secondary lg:w-14">
          <div
            className="h-full bg-black dark:bg-primary"
            style={{ width: `${lightness}%` }}
          />
        </div>
      </div>
    </div>
  )
}
