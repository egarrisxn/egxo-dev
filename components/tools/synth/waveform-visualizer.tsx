'use client'

import { useEffect, useRef } from 'react'
import type * as Tone from 'tone'

interface WaveformVisualizerProps {
  analyser: Tone.Analyser | null
}

export const WaveformVisualizer: React.FC<WaveformVisualizerProps> = ({
  analyser,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    if (!canvasRef.current || !analyser) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const draw = () => {
      const width = canvas.width
      const height = canvas.height
      const waveform = analyser.getValue()

      // Clear canvas
      ctx.fillStyle = 'rgb(240, 240, 240)' // Light gray background
      ctx.fillRect(0, 0, width, height)

      // Add "OP-1" text
      ctx.font = '32px monospace'
      ctx.fillStyle = 'rgb(0, 0, 0)'
      ctx.fillText('v0P-1', 20, 40)

      // Draw waveform
      ctx.beginPath()
      ctx.strokeStyle = 'rgb(0, 0, 0)' // Black waveform
      ctx.lineWidth = 2

      const sliceWidth = width / waveform.length

      let x = 0
      ctx.moveTo(x, height / 2)

      for (let i = 0; i < waveform.length; i++) {
        const v = waveform[i] as number
        const y = (v * height) / 2 + height / 2

        ctx.lineTo(x, y)
        x += sliceWidth
      }

      ctx.lineTo(width, height / 2)
      ctx.stroke()

      animationRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [analyser])

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={165}
      className="w-full rounded-sm"
    />
  )
}
