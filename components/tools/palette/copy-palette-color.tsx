import { Check, Copy } from 'lucide-react'

interface CopyPaletteColorProps {
  copyToClipboard: (value: string) => void
  hex: string
  copiedHex: string | null
}

export default function CopyPaletteColor({
  copyToClipboard,
  hex,
  copiedHex,
}: CopyPaletteColorProps) {
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
