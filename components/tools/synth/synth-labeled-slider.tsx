import { Slider } from '@/components/ui/slider'

interface SynthLabeledSliderProps {
  label: string
  value: number
  onChange: (val: number) => void
}

export default function SynthLabeledSlider({
  label,
  value,
  onChange,
}: SynthLabeledSliderProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-bold tracking-wider text-card-foreground uppercase">
        {label}
      </span>
      <Slider
        value={[value]}
        onValueChange={(val) => onChange(val[0])}
        max={1}
        step={0.01}
      />
    </div>
  )
}
