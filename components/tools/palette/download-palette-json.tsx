import { Button } from '@/components/ui/button'
import { DownloadIcon } from '@/components/icons'

interface DownloadPaletteJsonProps {
  downloadPalette: () => void
}

export default function DownloadPaletteJson({
  downloadPalette,
}: DownloadPaletteJsonProps) {
  return (
    <Button variant="outline" size="icon" onClick={downloadPalette}>
      <DownloadIcon className="size-4" />
      <span className="sr-only">Download JSON</span>
    </Button>
  )
}
