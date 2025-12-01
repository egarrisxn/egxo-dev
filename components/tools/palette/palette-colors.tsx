import { motion } from 'motion/react'
import { Check, Copy, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ColorDetailsProps {
  hue: number
  saturation: number
  lightness: number
}

export function ColorDetails({
  hue,
  saturation,
  lightness,
}: ColorDetailsProps) {
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

interface ColorInputProps {
  inputValue: string
  setInputValue: (value: string) => void
  setBaseColor: (value: string) => void
  formatHexValue: (value: string) => string
}

export function ColorInput({
  inputValue,
  setInputValue,
  setBaseColor,
  formatHexValue,
}: ColorInputProps) {
  return (
    <motion.input
      type="text"
      value={inputValue}
      onChange={(e) => {
        // Always update the input value as the user types
        setInputValue(e.target.value)
      }}
      onBlur={() => {
        // When the user clicks outside, try to convert to a valid hex
        const validHex = formatHexValue(inputValue)
        setInputValue(validHex)
        setBaseColor(validHex)
      }}
      onKeyDown={(e) => {
        // When the user presses Enter, update the color
        if (e.key === 'Enter') {
          const validHex = formatHexValue(inputValue)
          setInputValue(validHex)
          setBaseColor(validHex)
          e.currentTarget.blur()
        }
      }}
      className="flex-1 rounded-lg border px-3 py-2 font-mono text-sm transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-primary"
      placeholder="#RRGGBB"
      initial={{ scale: 1 }}
      whileFocus={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    />
  )
}

interface ColorSquareProps {
  className?: string
  baseColor?: string
  hue?: string
}

export function ColorSquare({ className, baseColor, hue }: ColorSquareProps) {
  return (
    <div
      className={`${className} size-8 rounded`}
      style={{ backgroundColor: baseColor || hue }}
    />
  )
}

interface CopyColorProps {
  copyToClipboard: (value: string) => void
  hex: string
  copiedHex: string | null
}

export function CopyColor({ copyToClipboard, hex, copiedHex }: CopyColorProps) {
  return (
    <div
      className="flex cursor-pointer items-center gap-0.5 font-mono text-xs tracking-tight lg:gap-1.5 lg:text-base lg:tracking-normal"
      onClick={() => copyToClipboard(hex)}
    >
      {hex}
      {copiedHex === hex ? (
        <Check className="size-3 text-green-500 lg:size-4" />
      ) : (
        <Copy className="size-3 opacity-50 lg:size-4" />
      )}
    </div>
  )
}

interface RandomizeColorProps {
  randomizeColor: () => void
  isRandomizing: boolean
}

export function RandomizeColor({
  randomizeColor,
  isRandomizing,
}: RandomizeColorProps) {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={randomizeColor}
        className="text-xs"
        disabled={isRandomizing}
      >
        <RefreshCw
          className={`mr-1 size-3 ${isRandomizing ? 'animate-spin' : ''}`}
        />
        Randomize
      </Button>
    </div>
  )
}
