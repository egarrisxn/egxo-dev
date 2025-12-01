import { RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface RandomizePaletteColorProps {
  randomizePaletteColor: () => void
  isRandomizing: boolean
}

export default function RandomizePaletteColor({
  randomizePaletteColor,
  isRandomizing,
}: RandomizePaletteColorProps) {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={randomizePaletteColor}
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
