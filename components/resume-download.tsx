import { Download } from 'lucide-react'

export function ResumeDownload() {
  return (
    <a
      href="/resume/EG-US-RESUME-2025.pdf"
      download
      className="group flex items-center gap-1 font-medium text-foreground/80 transition-colors hover:text-foreground"
    >
      Resume{' '}
      <Download width={16} height={16} className="group-hover:scale-110" />
    </a>
  )
}
