// Convert hex to Rgb
export const hexToRgb = (hex: string) => {
  if (!/^#([0-9A-F]{3}|[0-9A-F]{6})$/i.test(hex)) {
    throw new Error('Invalid HEX color')
  }
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `${r}, ${g}, ${b}`
}

const adjustColor = (hex: string, amount: number, opacity = 1) => {
  let r = parseInt(hex.slice(1, 3), 16)
  let g = parseInt(hex.slice(3, 5), 16)
  let b = parseInt(hex.slice(5, 7), 16)

  r = Math.max(0, Math.min(255, r + amount))
  g = Math.max(0, Math.min(255, g + amount))
  b = Math.max(0, Math.min(255, b + amount))

  if (opacity < 1) {
    return `rgba(${r}, ${g}, ${b}, ${opacity})`
  }
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}

const isLightColor = (hex: string) => {
  if (!/^#([0-9A-F]{3}|[0-9A-F]{6})$/i.test(hex)) {
    throw new Error('Invalid HEX color')
  }
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000
  return brightness > 128
}

const getDefaultStyle = (color: string) => {
  const shadowColor1 = adjustColor(color, -10, 0.1)
  const shadowColor2 = adjustColor(color, -10, 0.3)
  return `
  .button {
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease;
    background: ${color};
    color: white;
    border-radius: 8px;
    box-shadow:
      0 2px 4px ${shadowColor1},
      0 4px 8px -2px ${shadowColor2},
  }
  .button:hover {
    transform: translateY(-2px);
    box-shadow:
      0 4px 8px ${shadowColor1},
      0 8px 16px -4px ${shadowColor2},
  }
  .button:active {
    transform: translateY(0);
  }`
}

const getRoundedStyle = (color: string) => {
  const shadowColor1 = adjustColor(color, -10, 0.1)
  const shadowColor2 = adjustColor(color, -10, 0.3)
  return `
  .button {
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease;
    background: ${color};
    color: white;
    border-radius: 24px;
    box-shadow:
      0 2px 4px ${shadowColor1},
      0 4px 8px -2px ${shadowColor2},
  }
  .button:hover {
    transform: translateY(-2px);
    box-shadow:
      0 4px 8px ${shadowColor1},
      0 8px 16px -4px ${shadowColor2},
  }
  .button:active {
    transform: translateY(0);
  }`
}

const getGradientStyle = (color: string) => {
  const hoverColor1 = adjustColor(color, -10)
  const activeColor1 = adjustColor(color, -5)
  const activeColor2 = adjustColor(color, -40)
  const shadowColor1 = adjustColor(color, -10, 0.1)
  const shadowColor2 = adjustColor(color, -10, 0.3)
  const insetShadow = adjustColor(color, -30, 0.2)
  return `
  .button {
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease;
    background: linear-gradient(135deg, ${color} 0%, color-mix(in srgb, ${color} 60%, black) 100%);
    color: white;
    border-radius: 8px;
    box-shadow:
      0 4px 8px ${shadowColor1},
      0 6px 12px -2px ${shadowColor2},
      inset 0 -2px 0 ${insetShadow};
  }
  .button:hover {
    transform: translateY(-2px);
    background: linear-gradient(135deg, ${hoverColor1} 0%, color-mix(in srgb, ${hoverColor1} 50%, black) 100%);
    box-shadow:
      0 6px 10px ${shadowColor1},
      0 8px 16px -4px ${shadowColor2},
      inset 0 -2px 0 ${insetShadow};
  }
  .button:active {
    transform: translateY(0);
    background: linear-gradient(135deg, color-mix(in srgb, ${activeColor1} 80%, black) 0%, ${activeColor2} 100%);
    box-shadow:
      0 3px 6px ${shadowColor1},
      0 5px 10px -2px ${shadowColor2},
      inset 0 -2px 0 ${insetShadow};
  }`
}

const getWaveStyle = (color: string) => {
  return `
  .button {
    position: relative;
    z-index: 1;
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease;
    background: transparent;
    background: #000;
    color: #fff;
    border-radius: 8px;
    overflow: hidden;
  }
  .button::before,
  .button::after {
    position: absolute;
    color: #fff;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
  .button::before {
    content: '';
    background: ${color};
    color: #fff;
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }
  .button:hover {
      transform: translateY(-2px);
      color: ${color};
  }
  .button:hover::before {
    transform: translate3d(100%, 0, 0);
  }
  .button:active {
    transform: translateY(2px);
  }`
}

const getFoldStyle = (color: string) => {
  const rgbColor = hexToRgb(color)
  return `
  .button {
    position: relative;
    z-index: 1;
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease;
    background: ${color};
    color: #fff;
    border-radius: 8px;
    box-shadow: 0.5em 0.5em 0.5em #0000004f;
  }
  .button::before {
    position: absolute;
    content: '';
    transition-duration: 200ms;
    background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(${rgbColor}, 1) 50%,
    rgba(${rgbColor}, 1) 60%
  );
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 0;
    width: 0;
    border-radius: 0 0 0.5em 0;
    box-shadow: 0.2em 0.2em 0.2em #0000004f;
  }
  .button:hover:before {
    height: 1.2em;
    width: 1.2em;
  }
  .button:active {
    scale: 0.95;
  }`
}

const getPopStyle = (color: string) => {
  const shadowColor1 = adjustColor(color, -20, 0.3)
  const shadowColor2 = adjustColor(color, -30, 0.6)
  return `
  .button {
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    background: ${color};
    color: white;
    border-radius: 12px;
    transform: perspective(500px) translateZ(0) translateY(1px);
    box-shadow:
      0 0 0 2px ${shadowColor1},
      3px 6px 0 0 ${shadowColor2},
      6px 12px 15px rgba(0, 0, 0, 0.2);
  }
  .button:hover {
    transform: perspective(500px) translateZ(6px) translateY(-2px);
    box-shadow:
      0 0 0 2px ${shadowColor1},
      4px 8px 0 0 ${shadowColor2},
      10px 16px 20px rgba(0, 0, 0, 0.3);
  }
  .button:active {
    transform: perspective(500px) translateZ(-4px) translateY(0);
    box-shadow:
      0 0 0 2px ${shadowColor1},
      2px 4px 0 0 ${shadowColor2},
      4px 8px 10px rgba(0, 0, 0, 0.2);
  }`
}

const getOutlineStyle = (color: string) => {
  const rgbColor = hexToRgb(color)
  const hoverShadowColor = adjustColor(color, -10, 0.2)
  const activeShadowColor = adjustColor(color, -10, 0.3)
  return `
  .button {
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    border: 2px solid ${color};
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease;
    background: transparent;
    color: ${color};
    border-radius: 8px;
    box-shadow: 0 0 0 2px rgba(${rgbColor}, 0.1);
  }
  .button:hover {
    transform: translateY(-4px);
    box-shadow: 
      0 0 0 4px ${hoverShadowColor},
      0 4px 8px rgba(0, 0, 0, 0.15);
  }
  .button:active {
    transform: translateY(0);
    box-shadow: 
      0 0 0 3px ${activeShadowColor},
      0 2px 4px rgba(0, 0, 0, 0.2);
  }`
}

const getGlowStyle = (color: string) => {
  const rgbaColor = hexToRgb(color)
  return `
  .button {
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    border: 2px solid ${color};
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease;
    background: transparent;
    color: ${color};
    border-radius: 8px;
    box-shadow: 0 0 0 0 rgba(${rgbaColor}, 0.3);
    animation: pulse 2s infinite ease-in-out;
  }
  .button:hover {
    transform: translateY(-2px);
    background: ${color};
    color: white;
    box-shadow:
      0 0 0 4px rgba(${rgbaColor}, 0.3),
      0 0 20px rgba(${rgbaColor}, 0.6);
  }
  .button:active {
    transform: translateY(0);
    box-shadow:
      0 0 0 4px rgba(${rgbaColor}, 0.5),
      0 0 15px rgba(${rgbaColor}, 0.7);
  }
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(${rgbaColor}, 0.3);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(${rgbaColor}, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(${rgbaColor}, 0);
    }
  }`
}

const getNeonStyle = (color: string) => {
  const rgbaColor = hexToRgb(color)
  return `
  .button {
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    border: 2px solid ${color};
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    background: rgba(${rgbaColor}, 0.1);
    color: ${color};
    border-radius: 8px;
    text-shadow: 0 0 8px rgba(${rgbaColor}, 0.5), 0 0 16px rgba(${rgbaColor}, 0.4);
    box-shadow:
      0 0 5px rgba(${rgbaColor}, 0.2),
      0 0 10px rgba(${rgbaColor}, 0.3),
      0 0 15px rgba(${rgbaColor}, 0.4),
      0 0 20px rgba(${rgbaColor}, 0.5);
  }
  .button:hover {
    transform: translateY(-2px);
    background: ${color};
    color: white;
    text-shadow: 0 0 8px white, 0 0 16px white;
    box-shadow:
      0 0 5px rgba(${rgbaColor}, 0.5),
      0 0 10px rgba(${rgbaColor}, 0.6),
      0 0 15px rgba(${rgbaColor}, 0.7),
      0 0 20px rgba(${rgbaColor}, 0.8);
  }
  .button:active {
    transform: translateY(0);
    box-shadow:
      0 0 5px rgba(${rgbaColor}, 0.7),
      0 0 10px rgba(${rgbaColor}, 0.8),
      0 0 15px rgba(${rgbaColor}, 1),
      0 0 20px rgba(${rgbaColor}, 1);
  }`
}

const getLiquidStyle = (color: string) => {
  return `
  .button {
    position: relative;
    z-index: 1;
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    border: 2px solid ${color};
    background: none;
    color: ${color};
    border-radius: 8px;
    overflow: hidden;
  }
  .button::before {
    content: '';
    position: absolute;
    z-index: -1;
    inset: 0;
    background: ${color};
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.3s ease;
  }
  .button:hover {
    color: white;
  }
  .button:hover::before {
    transform: scaleY(1);
  }
  .button:active {
    transform: translateY(2px);
  }`
}

const getRetroStyle = (color: string) => {
  return `
  .button {
    position: relative;
    z-index: 1;
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease;
    background: #000;
    color: white;
    border-radius: 8px;
    overflow: hidden;
  }
  .button::before,
  .button::after {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
  .button::before {
    content: '';
    background: ${color};
    color: #fff;
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }
  .button:hover {
    transform: translateY(-2px);
    color: ${color};
  }
  .button:hover::before {
    transform: translate3d(100%, 0, 0);
  }
  .button:active {
    transform: translateY(2px);
  }`
}

const getGlitchStyle = (color: string) => {
  const shadowColor1 = 'rgba(0, 0, 0, 0.1)'
  const shadowColor2 = 'rgba(0, 0, 0, 0.2)'
  return `
  .button {
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease;
    background: transparent;
    color: ${color};
    border-radius: 8px;
    box-shadow: 
      0 2px 4px ${shadowColor1},
      0 4px 8px -2px ${shadowColor1},
      inset 0 -2px 0 ${shadowColor2};
  }
  .button:hover {
    animation: glitch 0.3s linear infinite;
  }
  @keyframes glitch {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-2px, 2px);
    }
    40% {
      transform: translate(-2px, -2px);
    }
    60% {
      transform: translate(2px, 2px);
    }
    80% {
      transform: translate(2px, -2px);
    }
    100% {
      transform: translate(0);
    }
  }`
}

const getBubbleStyle = (color: string) => {
  const shadowColor = adjustColor(color, 0, 0.2)
  const hoverShadowColor1 = 'rgba(0, 0, 0, 0.15)'
  const hoverShadowColor2 = 'rgba(0, 0, 0, 0.15)'
  const insetShadowColor = 'rgba(0, 0, 0, 0.2)'
  const beforeColor = adjustColor(color, -20)
  return `
  .button {
     position: relative;
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease;
    z-index: 1;
    background: transparent;
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px ${shadowColor};
    overflow: hidden;
  }
  .button:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 4px 8px ${hoverShadowColor1},
      0 8px 16px -4px ${hoverShadowColor2},
      inset 0 -2px 0 ${insetShadowColor};
  }
  .button::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: transform 0.3s ease-in-out;
    background: ${beforeColor};
    border-radius: 8px;
    transform: scale(0);
  }
  .button:hover::before {
    border-radius: 8px;
    transform: scale(1);
  }
  .button:active {
    transform: translateY(0);
  }`
}

const getAppearanceStyle = (color: string) => {
  return `
  .button {
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    border: 1px solid transparent;
    outline: 2px solid;
    outline-color: white;
    outline-offset: 0;
    cursor: pointer;
    transition: all 300ms cubic-bezier(0.36, 0.63, 0.5, 0.73);
    color: white;
    border-radius: 8px;
    box-shadow: 0 0 0 0 ${color};
  }
  .button:hover {
    transform: translateY(-2px);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    color: ${color};
    box-shadow: 0 0 0 2px ${color};
  }
  .button:active {
    transform: translateY(2px);
  }`
}

const getMetallicStyle = (color: string) => {
  return `
  .button {
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease;
    background: linear-gradient(145deg, #e6e6e6, #ffffff);
    color: ${color};
    border-radius: 12px;
    box-shadow:
    inset 2px 2px 5px #ffffff,
    inset -2px -2px 5px #bababa;
  }
  .button:hover {
    transform: translateY(-2px);
  }
  .button:active {
    transform: translateY(0);
  }`
}

const getGlassStyle = (color: string) => {
  const rgbColor = hexToRgb(color)
  return `
  .button {
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1rem;
    border: 1px solid rgba(${rgbColor}, 0.4);
    cursor: pointer;
    transition: all 0.2s ease;
    background: rgba(${rgbColor}, 0.4);
    color: ${isLightColor(color) ? '#1f2937' : 'white'};
    box-shadow: 0 4px 6px -1px rgba(${rgbColor}, 0.3);
    backdrop-filter: blur(8px);
  }
  .button:hover {
    background: rgba(${rgbColor}, 0.5);
    box-shadow: 0 6px 8px -1px rgba(${rgbColor}, 0.4);
    transform: translateY(-2px);
  }
  .button:active {
    transform: translateY(0);
  }`
}

const getNeumorphicStyle = (color: string) => {
  const isLight = isLightColor(color)
  const shadowColor1 = isLight ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.5)'
  const shadowColor2 = isLight
    ? 'rgba(255, 255, 255, 0.9)'
    : 'rgba(255, 255, 255, 0.1)'
  return `
    .button {
      padding: 0.75rem 1.5rem;
      font-weight: 600;
      font-size: 1rem;
      border: none;
      outline: none;
      cursor: pointer;
      transition: all 0.2s ease;
      background: ${color};
      color: ${isLight ? '#1f2937' : 'white'};
      border-radius: 12px;
      box-shadow: 
        12px 12px 24px ${shadowColor1},
        -12px -12px 24px ${shadowColor2},
        inset 0 0 0 ${shadowColor1},
        inset 0 0 0 ${shadowColor2};
    }
    .button:hover {
      box-shadow: 
        16px 16px 32px ${shadowColor1},
        -16px -16px 32px ${shadowColor2},
        inset 0 0 0 ${shadowColor1},
        inset 0 0 0 ${shadowColor2};
    }
    .button:active {
      box-shadow: 
        0 0 0 ${shadowColor1},
        0 0 0 ${shadowColor2},
        inset 12px 12px 24px ${shadowColor1},
        inset -12px -12px 24px ${shadowColor2};
    }`
}

const getLoadingStyle = (color: string) => {
  return `
  .button {
    position: relative;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    outline: none;
    pointer-events: none;
    padding-left: 6px;
    padding-right: 32px;
    transition: all 0.2s ease;
    background: ${color};
    color: ${isLightColor(color) ? '#1f2937' : 'white'};
  }
  .button::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border: 2px solid transparent;
    margin-left: 12px;
    border-top-color: currentColor;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
  }
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }`
}

const getProgressStyle = (color: string) => {
  return `
  .button {
    position: relative;
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    border: 1px solid ${color};
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease;
    background: transparent;
    color: ${color};
    border-radius: 8px;
    overflow: hidden;
  }
  .button::before {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    height: 2.5px;
    width: 100%;
    background: ${color};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 1s ease;
  }
  .button:hover::before {
  transform: scaleX(1);
  }`
}

const getSuccessStyle = (color: string) => {
  return `
  .button {
    position: relative;
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    border: 1px solid ${color};
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease;
    background: transparent;
    color: ${color};
    border-radius: 8px;
    overflow: hidden;
  }
  .button::before {
    position: absolute;
    content: '✓';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${color};
    color: #01eb01;
    transform: translateY(100%);
    transition: transform 0.3s ease;
  }
  .button:hover::before {
    transform: translateY(0);
  }`
}

const getErrorStyle = (color: string) => {
  return `
  .button {
    position: relative;
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    border: 1px solid ${color};
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease;
    background: transparent;
    color: ${color};
    border-radius: 8px;
    overflow: hidden;
  }
  .button::before {
    position: absolute;
    content: '×';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    color: #ff0000;
    transform: translateY(100%);
    transition: transform 0.3s ease;
  }
  .button:hover::before {
    transform: translateY(0);
  }`
}

export const getButtonStyles = (
  groupType: string | number,
  variant: { color: string },
) => {
  // Explicitly type the dictionary so it allows string indexing
  const styleGenerators: Record<string, (color: string) => string> = {
    Default: getDefaultStyle,
    Rounded: getRoundedStyle,
    Gradient: getGradientStyle,
    Wave: getWaveStyle,
    Fold: getFoldStyle,
    Pop: getPopStyle,
    Outline: getOutlineStyle,
    Glow: getGlowStyle,
    Neon: getNeonStyle,
    Liquid: getLiquidStyle,
    Retro: getRetroStyle,
    Glitch: getGlitchStyle,
    Bubble: getBubbleStyle,
    Appearance: getAppearanceStyle,
    Metallic: getMetallicStyle,
    Glass: getGlassStyle,
    Neumorphic: getNeumorphicStyle,
    Loading: getLoadingStyle,
    Progress: getProgressStyle,
    Success: getSuccessStyle,
    Error: getErrorStyle,
  }

  const generator = styleGenerators[String(groupType)]

  if (!generator) {
    throw new Error(`Invalid button style group: ${groupType}`)
  }
  return generator(variant.color)
}
