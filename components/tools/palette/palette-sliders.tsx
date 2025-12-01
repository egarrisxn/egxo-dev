import { Slider } from '@/components/ui/slider'

interface HueSliderProps {
  hueShift: number
  setHueShift: (value: number) => void
}

export function HueSlider({ hueShift, setHueShift }: HueSliderProps) {
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

interface VibrancySliderProps {
  vibrancy: number
  setVibrancy: (value: number) => void
}

export function VibrancySlider({ vibrancy, setVibrancy }: VibrancySliderProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <label className="text-sm font-medium">Vibrancy</label>
        <span className="text-sm text-gray-500">{vibrancy}%</span>
      </div>
      <Slider
        value={[vibrancy]}
        min={0}
        max={100}
        step={1}
        onValueChange={(value) => setVibrancy(value[0])}
        className="transition-all duration-150 ease-out"
      />
    </div>
  )
}
