'use client'

import { memo } from 'react'

interface KeyProps {
  note?: string
  label: string
  isBlack: boolean
  isActive: boolean
  onClick: () => void
  onMouseDown: () => void
  onMouseUp: () => void
  style?: React.CSSProperties
}

const Key = memo(
  ({
    label,
    isBlack,
    isActive,
    onClick,
    onMouseDown,
    onMouseUp,
    style,
  }: KeyProps) => {
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

    return (
      <div
        className={`${baseClasses} flex items-end justify-center select-none`}
        onClick={onClick}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onMouseDown}
        onTouchEnd={onMouseUp}
        style={style}
      >
        <div
          className={`absolute inset-0 ${bgClasses} ${
            !isBlack ? 'rounded-b-lg' : ''
          } transition-all duration-75 ease-in-out`}
        />
        <span
          className={`relative z-20 mb-2 text-xs font-bold ${
            isBlack ? 'text-white' : 'text-pink-400'
          } transition-colors select-none ${isActive ? (isBlack ? 'text-white' : 'text-pink-400') : ''}`}
        >
          {label}
        </span>
      </div>
    )
  },
)

Key.displayName = 'Key'

interface KeyboardProps {
  activeKeys: Set<string>
  onNoteOn: (note: string) => void
  onNoteOff: (note: string) => void
}

export const SynthKeyboard = memo(
  ({ activeKeys, onNoteOn, onNoteOff }: KeyboardProps) => {
    // Define white keys first (extended range)
    const whiteKeys = [
      { key: 'a', note: 'C4', label: 'A' },
      { key: 's', note: 'D4', label: 'S' },
      { key: 'd', note: 'E4', label: 'D' },
      { key: 'f', note: 'F4', label: 'F' },
      { key: 'g', note: 'G4', label: 'G' },
      { key: 'h', note: 'A4', label: 'H' },
      { key: 'j', note: 'B4', label: 'J' },
      { key: 'k', note: 'C5', label: 'K' },
      { key: 'l', note: 'D5', label: 'L' },
      { key: ';', note: 'E5', label: ';' },
      { key: "'", note: 'F5', label: "'" },
      { key: '\\', note: 'G5', label: '\\' },
    ]

    // Define black keys with their positions (extended range)
    const blackKeys = [
      { key: 'w', note: 'C#4', label: 'W', offset: 1.7 },
      { key: 'e', note: 'D#4', label: 'E', offset: 2.4 },
      { key: 't', note: 'F#4', label: 'T', offset: 3.75 },
      { key: 'y', note: 'G#4', label: 'Y', offset: 4.4 },
      { key: 'u', note: 'A#4', label: 'U', offset: 5.05 },
      { key: 'o', note: 'C#5', label: 'O', offset: 6.4 },
      { key: 'p', note: 'D#5', label: 'P', offset: 7.1 },
      { key: ']', note: 'F#5', label: ']', offset: 8.45 },
    ]

    return (
      <div className="relative h-48 overflow-hidden rounded-sm border-t border-gray-200 bg-gray-100 shadow-inner">
        {/* White keys */}
        <div className="absolute inset-0 flex">
          {whiteKeys.map(({ key, note, label }) => (
            <Key
              key={key}
              note={note}
              label={label}
              isBlack={false}
              isActive={activeKeys.has(key)}
              onClick={() => {}}
              onMouseDown={() => onNoteOn(note)}
              onMouseUp={() => onNoteOff(note)}
            />
          ))}
        </div>

        {/* Black keys */}
        <div className="absolute inset-0 flex items-start px-[0.166%]">
          {blackKeys.map(({ key, note, label, offset }) => (
            <Key
              key={key}
              note={note}
              label={label}
              isBlack={true}
              isActive={activeKeys.has(key)}
              onClick={() => {}}
              onMouseDown={() => onNoteOn(note)}
              onMouseUp={() => onNoteOff(note)}
              style={{ left: `${(offset - 1) * 12.5}%` }}
            />
          ))}
        </div>
      </div>
    )
  },
)

SynthKeyboard.displayName = 'Synth Keyboard'
