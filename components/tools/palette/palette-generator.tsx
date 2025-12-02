'use client'

import { useState, useEffect, useMemo } from 'react'
import { HexColorPicker } from 'react-colorful'
import { toast } from 'sonner'
import { motion } from 'motion/react'
import {
  hexToHSL,
  hslToHex,
  formatHexValue,
  generateColorShades,
  getAccessibilityLevel,
  getContrastRatio,
} from '@/helpers/palette-generator'
import { TEST_COLOR_SHADES } from '@/lib/data'
import type { PaletteColorShade, PaletteAccessibilityScore } from '@/lib/types'
import RandomizePaletteColor from '@/components/tools/palette/randomize-palette-color'
import PaletteColorInput from '@/components/tools/palette/palette-color-input'
import PaletteColorDetails from '@/components/tools/palette/palette-color-details'
import PaletteColorSquare from '@/components/tools/palette/palette-color-square'
import CopyPaletteColors from '@/components/tools/palette/copy-palette-color'
import PaletteHueSlider from '@/components/tools/palette/palette-hue-slider'
import PaletteVibrancySlider from '@/components/tools/palette/pallete-vibrancy-slider'
import AccessibilityPassing from '@/components/tools/palette/accessibility-passing'
import AccessibilityFailing from '@/components/tools/palette/accessibility-failing'
import DownloadJson from '@/components/tools/palette/download-palette-json'

function computeAccessibilityScores(
  colorShades: PaletteColorShade[],
): PaletteAccessibilityScore[] {
  const results: PaletteAccessibilityScore[] = []

  TEST_COLOR_SHADES.forEach((bgShadeValue, bgIndex) => {
    const bgShade = colorShades.find((s) => s.shade === bgShadeValue)
    if (!bgShade) return

    TEST_COLOR_SHADES.slice(bgIndex + 1).forEach((fgShadeValue) => {
      const fgShade = colorShades.find((s) => s.shade === fgShadeValue)
      if (!fgShade) return

      const ratio = getContrastRatio(bgShade.hex, fgShade.hex)
      const { level, pass } = getAccessibilityLevel(ratio)

      results.push({
        background: bgShade,
        foreground: fgShade,
        ratio,
        level,
        pass,
      })
    })
  })

  return results.sort((a, b) => b.ratio - a.ratio)
}

export default function PaletteGenerator() {
  const [baseColor, setBaseColor] = useState('#15437F')
  const [vibrancy, setVibrancy] = useState(50)
  const [hueShift, setHueShift] = useState(0)
  const [copiedHex, setCopiedHex] = useState<string | null>(null)
  const [inputValue, setInputValue] = useState(baseColor)
  const [isRandomizing, setIsRandomizing] = useState(false)

  // Compute color shades directly from baseColor/vibrancy/hueShift
  const colorShades = useMemo(
    () => generateColorShades(baseColor, vibrancy, hueShift),
    [baseColor, vibrancy, hueShift],
  )

  useEffect(() => {
    if (copiedHex) {
      const timeout = setTimeout(() => setCopiedHex(null), 1000)
      return () => clearTimeout(timeout)
    }
  }, [copiedHex])

  useEffect(() => {
    setInputValue(baseColor)
  }, [baseColor])

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex)
    setCopiedHex(hex)
    toast.success(`${hex} has been copied to your clipboard.`)
  }

  const downloadPalette = () => {
    const palette = colorShades.reduce(
      (acc, { shade, hex }) => {
        acc[shade] = hex
        return acc
      },
      {} as Record<number, string>,
    )
    const dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(palette, null, 2))
    const downloadAnchorNode = document.createElement('a')
    downloadAnchorNode.setAttribute('href', dataStr)
    downloadAnchorNode.setAttribute(
      'download',
      `palette-${baseColor.replace('#', '')}.json`,
    )
    document.body.appendChild(downloadAnchorNode)
    downloadAnchorNode.click()
    downloadAnchorNode.remove()
  }

  const randomizePaletteColor = () => {
    setIsRandomizing(true)
    setVibrancy(50)
    setHueShift(0)

    const completelyRandom = Math.random() < 0.3
    const [currentHue] = hexToHSL(baseColor)

    const newHue = completelyRandom
      ? Math.floor(Math.random() * 360)
      : (currentHue + (Math.random() * 120 - 60) + 360) % 360
    const newSaturation = 20 + Math.random() * 80
    const newLightness = 20 + Math.random() * 60

    const newColor = hslToHex(newHue, newSaturation, newLightness)
    setBaseColor(newColor)
    setInputValue(newColor)
    toast.success(`Randomized base color: ${newColor}`)

    setTimeout(() => setIsRandomizing(false), 500)
  }

  // Accessibility calculations
  const accessibilityScores = useMemo(
    () => computeAccessibilityScores(colorShades),
    [colorShades],
  )

  const passingCombinations = useMemo(
    () => accessibilityScores.filter((score) => score.pass),
    [accessibilityScores],
  )

  const failingCombinations = useMemo(
    () => accessibilityScores.filter((score) => !score.pass),
    [accessibilityScores],
  )

  return (
    <div className="flex w-full flex-col gap-4 p-4 sm:rounded-2xl sm:border sm:border-accent-foreground/40 sm:bg-card sm:shadow-md sm:ring-1 sm:ring-muted/50 sm:ring-inset">
      {/* Header */}
      <div className="flex flex-row items-center justify-between border-b pb-4">
        <div className="flex flex-row items-center gap-2">
          <PaletteColorSquare baseColor={baseColor} />
          <span className="text-xs leading-none text-slate-500 sm:pt-0.5 sm:text-base">
            {baseColor}
          </span>
        </div>

        <div className="flex">
          <DownloadJson downloadPalette={downloadPalette} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-6">
          <div className="space-y-4 rounded-lg border p-4">
            {/* Color randomizer */}
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Base Color</h3>
              <div className="flex items-center gap-2">
                <RandomizePaletteColor
                  randomizePaletteColor={randomizePaletteColor}
                  isRandomizing={isRandomizing}
                />
                <PaletteColorSquare baseColor={baseColor} />
              </div>
            </div>

            {/* Color selector */}
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <HexColorPicker
                color={baseColor}
                onChange={setBaseColor}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>

            {/* Color input (#hex) */}
            <div className="flex items-center gap-1.5">
              <PaletteColorSquare baseColor={baseColor} />
              <PaletteColorInput
                inputValue={inputValue}
                setInputValue={setInputValue}
                setBaseColor={setBaseColor}
                formatHexValue={(value) => formatHexValue(value, baseColor)}
              />
            </div>
          </div>

          {/* Vibrancy & hue adjustment */}
          <div className="space-y-3 p-2">
            <PaletteVibrancySlider
              vibrancy={vibrancy}
              setVibrancy={setVibrancy}
            />
            <PaletteHueSlider hueShift={hueShift} setHueShift={setHueShift} />
          </div>

          {/* Hue visualizer */}
          <div className="flex h-24 overflow-hidden rounded-lg">
            {colorShades.map(({ shade, hex }, index) => (
              <motion.div
                key={shade}
                className="flex-1"
                style={{ backgroundColor: hex }}
                title={`${shade}: ${hex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
              />
            ))}
          </div>

          {/* Accessibility check */}
          <div className="rounded-lg border p-3">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-medium">Accessibility Pairs</h3>
              <div className="text-xs text-gray-500">
                {passingCombinations.length} passing /{' '}
                {accessibilityScores.length} total
              </div>
            </div>
            <div className="space-y-3">
              <AccessibilityPassing combinations={passingCombinations} />
              <AccessibilityFailing combinations={failingCombinations} />
            </div>
          </div>
        </div>

        {/* Color palette (50-900) */}
        <div className="space-y-6.5">
          {colorShades.map(
            ({ shade, hex, hue, saturation, lightness }, index) => (
              <motion.div
                key={shade}
                className="flex flex-row items-center gap-1.5 rounded-lg p-1 transition-all duration-200 hover:bg-gray-100 md:px-0 lg:p-3 dark:hover:bg-gray-800"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                whileHover={{ scale: 1.01, x: 5 }}
              >
                <PaletteColorSquare
                  className="lg:mr-2 lg:size-10"
                  baseColor={hex}
                />
                <div className="w-4.5 text-xs font-bold tracking-tight lg:w-8.5 lg:text-base">
                  {shade}
                </div>
                <CopyPaletteColors
                  copyToClipboard={copyToClipboard}
                  hex={hex}
                  copiedHex={copiedHex}
                />
                <PaletteColorDetails
                  hue={hue}
                  saturation={saturation}
                  lightness={lightness}
                />
              </motion.div>
            ),
          )}
        </div>
      </div>
    </div>
  )
}
