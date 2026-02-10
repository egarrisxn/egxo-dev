'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

interface SynthPitchShiftProps {
  onChange: (pitch: number) => void
}

export default function SynthPitchShift({ onChange }: SynthPitchShiftProps) {
  const [pitchShift, setPitchShift] = useState(-12)
  const [isDragging, setIsDragging] = useState(false)
  const pitchShiftRef = useRef<HTMLDivElement>(null)

  const handlePitchChange = useCallback(
    (e: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
      if (!pitchShiftRef.current) return

      const rect = pitchShiftRef.current.getBoundingClientRect()
      const y = e.clientY - rect.top
      const pitch = 24 * (1 - y / rect.height) - 12
      const clampedPitch = Math.max(-12, Math.min(12, pitch))

      setPitchShift(clampedPitch)
      onChange(clampedPitch)
    },
    [onChange],
  )

  const handleMouseDown = useCallback(() => setIsDragging(true), [])
  const handleMouseUp = useCallback(() => setIsDragging(false), [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) handlePitchChange(e)
    }

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, handlePitchChange, handleMouseUp])

  return (
    <div className="relative mb-10 flex h-20 w-full flex-col gap-6 rounded-sm border bg-card py-0.5 text-card-foreground shadow-sm">
      <div
        ref={pitchShiftRef}
        className={`relative size-full ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseDown={handleMouseDown}
      >
        <div
          className="absolute h-0.5 w-full rounded-sm bg-pink-400 px-0.5"
          style={{ bottom: `${((pitchShift + 12) * 100) / 24}%` }}
        />

        <div
          className="absolute inset-0 flex items-center justify-center text-xl font-bold"
          style={{ userSelect: 'none' }}
        >
          {pitchShift === -12 ? '0' : (pitchShift + 12).toFixed(2)}
        </div>
      </div>

      <div className="absolute -bottom-13 left-1 flex h-full items-center">
        <span
          className="origin-center text-xs font-bold whitespace-nowrap text-black"
          style={{ userSelect: 'none' }}
        >
          Pitch Shift
        </span>
      </div>
    </div>
  )
}
