'use client'

import { memo, useCallback, type CSSProperties } from 'react'

interface SynthKeyProps {
  note: string
  label: string
  isBlack: boolean
  isActive: boolean
  onNoteOn: (note: string) => void
  onNoteOff: (note: string) => void
  style?: CSSProperties
}

export default function SynthKey({
  note,
  label,
  isBlack,
  isActive,
  onNoteOn,
  onNoteOff,
  style,
}: SynthKeyProps) {
  const handleDown = useCallback(() => {
    onNoteOn(note)
  }, [note, onNoteOn])

  const handleUp = useCallback(() => {
    onNoteOff(note)
  }, [note, onNoteOff])

  const baseClasses = isBlack
    ? 'absolute w-[6%] h-[60%] -ml-[4%] z-10'
    : 'relative h-full w-[12.5%] first:rounded-l-lg last:rounded-r-lg'

  const bgClasses = isBlack
    ? `bg-gradient-to-b from-gray-800 to-gray-900 ${
        isActive
          ? 'from-gray-700 to-gray-800 shadow-[inset_0_2px_8px_rgba(255,255,255,0.1)]'
          : 'shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3)]'
      }`
    : `bg-gradient-to-b from-white to-gray-50 ${
        isActive
          ? 'from-gray-100 to-white shadow-[inset_0_2px_8px_rgba(0,0,0,0.1)]'
          : 'shadow-[inset_0_-2px_4px_rgba(0,0,0,0.1)]'
      } border-l border-gray-200 first:border-l-0`

  const labelColor = isBlack ? 'text-white' : 'text-pink-400'

  return (
    <div
      className={`${baseClasses} flex items-end justify-center select-none`}
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      onMouseLeave={handleUp}
      onTouchStart={handleDown}
      onTouchEnd={handleUp}
      style={style}
    >
      <div
        className={`absolute inset-0 ${bgClasses} ${
          !isBlack ? 'rounded-b-lg' : ''
        } transition-all duration-75 ease-in-out`}
      />
      <span
        className={`relative z-20 mb-2 text-xs font-bold ${labelColor} transition-colors select-none`}
      >
        {label}
      </span>
    </div>
  )
}

const Key = memo(SynthKey)
Key.displayName = 'Key'
