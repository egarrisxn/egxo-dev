import { DownloadIcon } from '@/components/icons'

export function ResumeDownloadIcon() {
  return (
    <a
      href="/resume/EG-US-RESUME-2026.pdf"
      download
      className="group flex items-center gap-1 font-medium text-foreground/80 transition-colors hover:text-foreground"
    >
      Resume <DownloadIcon className="size-4 group-hover:scale-110" />
    </a>
  )
}
