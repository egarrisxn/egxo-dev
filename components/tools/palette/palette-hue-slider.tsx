import { Slider } from '@/components/ui/slider'

interface PaletteHueSliderProps {
  hueShift: number
  setHueShift: (value: number) => void
}

export default function PaletteHueSlider({
  hueShift,
  setHueShift,
}: PaletteHueSliderProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <label className="text-sm font-medium">Hue Shift</label>
        <span className="text-sm text-gray-500">{hueShift}°</span>
      </div>
      <Slider
        value={[hueShift]}
        min={-180}
        max={180}
        step={1}
        onValueChange={(value) => setHueShift(value[0])}
        className="transition-all duration-150 ease-out"
      />
    </div>
  )
}
