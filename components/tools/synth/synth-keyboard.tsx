'use client'

import { SYNTH_BLACK_KEYS, SYNTH_WHITE_KEYS } from '@/lib/data'
import SynthKey from '@/components/tools/synth/synth-key'

interface SynthKeyboardProps {
  activeKeys: Set<string>
  onNoteOn: (note: string) => void
  onNoteOff: (note: string) => void
}

export default function SynthKeyboard({
  activeKeys,
  onNoteOn,
  onNoteOff,
}: SynthKeyboardProps) {
  return (
    <div className="relative h-48 overflow-hidden rounded-sm border-t border-gray-200 bg-gray-100 shadow-inner">
      {/* White keys */}
      <div className="absolute inset-0 flex">
        {SYNTH_WHITE_KEYS.map(({ key, note, label }) => (
          <SynthKey
            key={key}
            note={note}
            label={label}
            isBlack={false}
            isActive={activeKeys.has(key)}
            onNoteOn={onNoteOn}
            onNoteOff={onNoteOff}
          />
        ))}
      </div>

      {/* Black keys */}
      <div className="absolute inset-0 flex items-start px-[0.166%]">
        {SYNTH_BLACK_KEYS.map(({ key, note, label, offset }) => (
          <SynthKey
            key={key}
            note={note}
            label={label}
            isBlack
            isActive={activeKeys.has(key)}
            onNoteOn={onNoteOn}
            onNoteOff={onNoteOff}
            style={{ left: `${(offset - 1) * 12.5}%` }}
          />
        ))}
      </div>
    </div>
  )
}
