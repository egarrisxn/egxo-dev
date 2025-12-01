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
    <div className="ml-auto grid grid-cols-3 gap-3 lg:gap-6">
      <div className="flex flex-col items-center">
        <div className="text-xs tracking-tight text-gray-500 lg:text-sm lg:tracking-normal">
          H {hue}
        </div>
        <div className="h-1 w-14 overflow-hidden rounded-full bg-secondary lg:w-16">
          <div
            className="h-full bg-black dark:bg-primary"
            style={{ width: `${(hue / 360) * 100}%` }}
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-xs tracking-tight text-gray-500 lg:text-sm lg:tracking-normal">
          S {saturation}
        </div>
        <div className="h-1 w-14 overflow-hidden rounded-full bg-secondary lg:w-16">
          <div
            className="h-full bg-black dark:bg-primary"
            style={{ width: `${saturation}%` }}
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-xs tracking-tight text-gray-500 lg:text-sm lg:tracking-normal">
          L {lightness}
        </div>
        <div className="h-1 w-14 overflow-hidden rounded-full bg-secondary lg:w-16">
          <div
            className="h-full bg-black dark:bg-primary"
            style={{ width: `${lightness}%` }}
          />
        </div>
      </div>
    </div>
  )
}
