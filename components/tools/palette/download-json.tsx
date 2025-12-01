import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface DownloadJsonProps {
  downloadPalette: () => void
}

export default function DownloadJson({ downloadPalette }: DownloadJsonProps) {
  return (
    <Button variant="outline" size="icon" onClick={downloadPalette}>
      <Download className="size-4" />
      <span className="sr-only">Download JSON</span>
    </Button>
  )
}
