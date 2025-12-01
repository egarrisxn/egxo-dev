'use client'

import { useRef, useEffect } from 'react'
import { drawStaff, drawNote } from '@/helpers/synth-player'

interface SynthAudioVisualizerProps {
  activeNotes: string[]
  resetKey: number
}

export default function SynthAudioVisualizer({
  activeNotes,
  resetKey,
}: SynthAudioVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animations = useRef<{ note: string; startTime: number }[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = canvas.clientWidth * dpr
      canvas.height = canvas.clientHeight * dpr
      ctx.scale(dpr, dpr)
    }

    resize()
    window.addEventListener('resize', resize)
    let frame: number

    const render = (time: number) => {
      drawStaff(ctx, canvas.width, canvas.height)

      animations.current = animations.current.filter((anim) => {
        const progress = (time - anim.startTime) / 2000
        if (progress >= 1) return false

        const dpr = window.devicePixelRatio || 1
        const width = canvas.width / dpr
        const x = width * 0.1 + progress * (width * 0.8)
        const fade = progress < 0.875 ? 1 : 1 - (progress - 0.875) / 0.125

        drawNote(ctx, canvas.height, anim.note, x, fade)
        return true
      })

      frame = requestAnimationFrame(render)
    }

    frame = requestAnimationFrame(render)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
    }
  }, [resetKey])

  useEffect(() => {
    activeNotes.forEach((note) => {
      if (!animations.current.some((a) => a.note === note)) {
        animations.current.push({ note, startTime: performance.now() })
      }
    })

    animations.current = animations.current.filter((anim) =>
      activeNotes.includes(anim.note),
    )
  }, [activeNotes])

  return <canvas ref={canvasRef} className="h-full w-full" />
}
