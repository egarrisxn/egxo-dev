'use client'

import { useRef, useEffect } from 'react'

interface AudioVisualizerProps {
  activeNotes: string[]
  resetKey: number
}

const notePositions: { [key: string]: number } = {
  C: 6,
  'C#': 7,
  Db: 7,
  D: 8,
  'D#': 9,
  Eb: 9,
  E: 10,
  F: -2,
  'F#': -1,
  Gb: -1,
  G: 0,
  'G#': 1,
  Ab: 1,
  A: 2,
  'A#': 3,
  Bb: 3,
  B: 4,
}

const drawStaff = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
) => {
  ctx.clearRect(0, 0, width, height)
  ctx.strokeStyle = '#000000'
  ctx.lineWidth = 1

  const lineSpacing = 20 // Fixed line spacing
  const staffHeight = lineSpacing * 4
  const startY = (height - staffHeight) / 2
  const staffWidth = width * 1.6 // Staff takes up 80% of the width
  const leftMargin = (width - staffWidth) / 2 // Center the staff horizontally

  for (let i = 0; i < 5; i++) {
    const y = startY + i * lineSpacing
    ctx.beginPath()
    ctx.moveTo(leftMargin, y)
    ctx.lineTo(leftMargin + staffWidth, y)
    ctx.stroke()
  }
}

const drawNote = (
  ctx: CanvasRenderingContext2D,
  height: number,
  note: string,
  x: number,
  opacity: number,
) => {
  const [noteName, octave] = note.split(/(\d+)/)
  const notePosition = notePositions[noteName]
  if (notePosition === undefined) return

  const lineSpacing = 10
  const staffHeight = lineSpacing * 4
  const startY = (height - staffHeight) / 2
  const y =
    startY +
    staffHeight -
    (notePosition * lineSpacing) / 2 -
    (Number.parseInt(octave) - 4) * 3.5 * lineSpacing

  ctx.fillStyle = '#000000'
  ctx.strokeStyle = '#000000'
  ctx.globalAlpha = opacity

  ctx.beginPath()
  ctx.ellipse(x, y, 4, 3, 0, 0, 2 * Math.PI)
  ctx.fill()

  ctx.beginPath()
  ctx.moveTo(x + 4, y)
  ctx.lineTo(x + 4, y - 20)
  ctx.stroke()

  ctx.globalAlpha = 1
}

export const AudioVisualizer: React.FC<AudioVisualizerProps> = ({
  activeNotes,
  resetKey,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const activeNoteAnimationsRef = useRef<
    {
      note: string
      startTime: number
    }[]
  >([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = canvas.clientWidth * dpr
      canvas.height = canvas.clientHeight * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${canvas.clientWidth}px`
      canvas.style.height = `${canvas.clientHeight}px`
    }

    resizeCanvas()
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    window.addEventListener('resize', resizeCanvas)

    let animationFrameId: number

    const animate = (timestamp: number) => {
      drawStaff(ctx, canvas.width, canvas.height)

      // Update and draw notes
      activeNoteAnimationsRef.current = activeNoteAnimationsRef.current.filter(
        (anim) => {
          const elapsed = timestamp - anim.startTime
          const duration = 2000 // 2 seconds to cross the screen
          const progress = elapsed / duration

          if (progress >= 1) return false

          const dpr = window.devicePixelRatio || 1
          const leftMargin =
            (canvas.width / dpr - (canvas.width / dpr) * 0.8) / 2
          const staffWidth = (canvas.width / dpr) * 0.8
          const x = leftMargin + progress * staffWidth
          const opacity = progress < 0.875 ? 1 : 1 - (progress - 0.875) / 0.125

          drawNote(ctx, canvas.height, anim.note, x, opacity)

          return true
        },
      )

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [resetKey]) // Use resetKey in the dependency array

  useEffect(() => {
    // Add new notes to animation
    activeNotes.forEach((note) => {
      if (!activeNoteAnimationsRef.current.some((anim) => anim.note === note)) {
        activeNoteAnimationsRef.current.push({
          note,
          startTime: performance.now(),
        })
      }
    })

    // Remove notes that are no longer active
    activeNoteAnimationsRef.current = activeNoteAnimationsRef.current.filter(
      (anim) => activeNotes.includes(anim.note),
    )
  }, [activeNotes])

  return <canvas ref={canvasRef} className="size-full" />
}
