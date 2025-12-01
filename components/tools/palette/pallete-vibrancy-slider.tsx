import { Slider } from '@/components/ui/slider'

interface PaletteVibrancySliderProps {
  vibrancy: number
  setVibrancy: (value: number) => void
}

export default function PaletteVibrancySlider({
  vibrancy,
  setVibrancy,
}: PaletteVibrancySliderProps) {
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
