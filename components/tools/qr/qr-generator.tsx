'use client'

import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import type { QRCorrectionLevel } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function QRCodeGenerator() {
  const [url, setUrl] = useState('https://egxo.dev')
  const [qrCode, setQRCode] = useState('https://egxo.dev')
  const [color, setColor] = useState('#000000')
  const [backgroundColor, setBackgroundColor] = useState('#ffffff')
  const [size, setSize] = useState(200)
  const [errorCorrection, setErrorCorrection] = useState<QRCorrectionLevel>('M')

  const generateQRCode = (e: React.FormEvent) => {
    e.preventDefault()
    setQRCode(url)
  }

  return (
    <div className="flex w-full max-w-md flex-col gap-4 sm:rounded-xl sm:border sm:border-border sm:bg-card sm:py-6 sm:shadow-lg">
      <div className="px-1 sm:px-6">
        <form onSubmit={generateQRCode} className="space-y-4">
          <div>
            <label
              className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
              htmlFor="url"
            >
              URL
            </label>
            <input
              id="url"
              type="url"
              placeholder="Enter a URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              className="w-full"
            />
          </div>

          <div className="grid grid-cols-3 items-center justify-center gap-4">
            <div>
              <label
                className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                htmlFor="color"
              >
                QR Color
              </label>
              <input
                id="color"
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="h-9.5 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40"
              />
            </div>
            <div>
              <label
                className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                htmlFor="backgroundColor"
              >
                BG Color
              </label>
              <input
                id="backgroundColor"
                type="color"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="h-9.5 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40"
              />
            </div>
            <div>
              <label
                className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                htmlFor="errorCorrection"
              >
                Error Level
              </label>
              <Select
                value={errorCorrection}
                onValueChange={(value) =>
                  setErrorCorrection(value as QRCorrectionLevel)
                }
              >
                <SelectTrigger className="w-full" id="errorCorrection">
                  <SelectValue placeholder="Select error correction level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="L">SM (7%)</SelectItem>
                  <SelectItem value="M">MD (15%)</SelectItem>
                  <SelectItem value="Q">LG (25%)</SelectItem>
                  <SelectItem value="H">XL (30%)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label
              className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
              htmlFor="size"
            >
              Size: {size}x{size}
            </label>
            <Slider
              id="size"
              min={100}
              max={350}
              step={10}
              value={[size]}
              onValueChange={(value) => setSize(value[0])}
              className="w-full"
            />
          </div>

          <Button type="submit" className="w-full">
            Generate Your QR
          </Button>
        </form>
      </div>

      <div className="flex items-center justify-center px-0 sm:px-2">
        {qrCode && (
          <div className="mt-4">
            <QRCodeSVG
              value={qrCode}
              size={size}
              fgColor={color}
              bgColor={backgroundColor}
              level={errorCorrection}
              marginSize={0}
            />
          </div>
        )}
      </div>
    </div>
  )
}
