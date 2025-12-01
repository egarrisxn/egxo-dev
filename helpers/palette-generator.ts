import type { PaletteColorShade } from '@/lib/types'

// Convert hex to HSL
export const hexToHSL = (hex: string): [number, number, number] => {
  hex = hex.replace(/^#/, '')
  const r = Number.parseInt(hex.substring(0, 2), 16) / 255
  const g = Number.parseInt(hex.substring(2, 4), 16) / 255
  const b = Number.parseInt(hex.substring(4, 6), 16) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const l = (max + min) / 2
  let h = 0
  let s = 0

  if (max !== min) {
    s = l > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min)
    if (max === r) {
      h = (g - b) / (max - min) + (g < b ? 6 : 0)
    } else if (max === g) {
      h = (b - r) / (max - min) + 2
    } else {
      h = (r - g) / (max - min) + 4
    }
    h /= 6
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)]
}

// Convert HSL to hex
export const hslToHex = (h: number, s: number, l: number): string => {
  h /= 360
  s /= 100
  l /= 100

  let r, g, b

  if (s === 0) {
    r = g = b = l
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q

    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }

  const toHex = (x: number) => {
    const hex = Math.round(x * 255).toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase()
}

// Format and validate hex value
export const formatHexValue = (value: string, baseColor: string): string => {
  let hex = value.replace(/[^0-9A-Fa-f]/g, '')
  if (!hex) return baseColor

  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((char) => char + char)
      .join('')
  }

  if (hex.length < 6) {
    if (hex.length === 1) {
      hex = hex.repeat(6)
    } else if (hex.length === 2) {
      hex = hex + hex + '00'
    } else if (hex.length === 4) {
      hex = hex + '00'
    } else if (hex.length === 5) {
      hex = hex + hex.charAt(0)
    }
  } else if (hex.length > 6) {
    hex = hex.substring(0, 6)
  }

  return '#' + hex.toUpperCase()
}

// Generate color shades
export const generateColorShades = (
  baseColor: string,
  vibrancy: number,
  hueShift: number,
): PaletteColorShade[] => {
  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
  const [baseHue, baseSat] = hexToHSL(baseColor)
  const adjustedHue = (baseHue + hueShift + 360) % 360
  const cappedVibrancy = Math.min(vibrancy, 85)
  const saturationMultiplier = cappedVibrancy / 50

  return shades.map((shade) => {
    const lightnessMap: Record<number, number> = {
      50: 96,
      100: 90,
      200: 80,
      300: 70,
      400: 60,
      500: 50,
      600: 40,
      700: 30,
      800: 20,
      900: 10,
    }

    const targetLightness = lightnessMap[shade]
    let adjustedSaturation: number

    if (shade <= 100) {
      adjustedSaturation = baseSat * saturationMultiplier * (0.3 + shade / 500)
    } else if (shade < 500) {
      adjustedSaturation = baseSat * saturationMultiplier * (0.6 + shade / 1000)
    } else if (shade < 800) {
      adjustedSaturation =
        baseSat * saturationMultiplier * (0.9 + (shade - 500) / 2000)
    } else {
      adjustedSaturation = baseSat * saturationMultiplier * 0.95
    }

    adjustedSaturation = Math.min(adjustedSaturation, 100)
    const hex = hslToHex(adjustedHue, adjustedSaturation, targetLightness)

    return {
      shade,
      hex,
      hue: adjustedHue,
      saturation: Math.round(adjustedSaturation),
      lightness: targetLightness,
    }
  })
}

export const getLuminance = (hex: string): number => {
  const rgb = parseInt(hex.replace('#', ''), 16)
  const r = (rgb >> 16) & 0xff
  const g = (rgb >> 8) & 0xff
  const b = rgb & 0xff

  const sr = r / 255
  const sg = g / 255
  const sb = b / 255

  const R = sr <= 0.03928 ? sr / 12.92 : Math.pow((sr + 0.055) / 1.055, 2.4)
  const G = sg <= 0.03928 ? sg / 12.92 : Math.pow((sg + 0.055) / 1.055, 2.4)
  const B = sb <= 0.03928 ? sb / 12.92 : Math.pow((sb + 0.055) / 1.055, 2.4)

  return 0.2126 * R + 0.7152 * G + 0.0722 * B
}

export const getContrastRatio = (color1: string, color2: string) => {
  const luminance1 = getLuminance(color1)
  const luminance2 = getLuminance(color2)
  const lighter = Math.max(luminance1, luminance2)
  const darker = Math.min(luminance1, luminance2)
  return (lighter + 0.05) / (darker + 0.05)
}

export const getAccessibilityLevel = (ratio: number) => {
  if (ratio >= 7) {
    return { level: 'AAA' as const, pass: true }
  }
  if (ratio >= 4.5) {
    return { level: 'AA' as const, pass: true }
  }
  if (ratio >= 3) {
    return { level: 'AA Large' as const, pass: true }
  }
  return { level: 'Fail' as const, pass: false }
}
