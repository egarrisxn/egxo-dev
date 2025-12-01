import { ScrollArea } from '@/components/ui/scroll-area'

function getNoteFrequency(note: string): string {
  const A4 = 440
  const notes = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B',
  ]
  const octave = Number.parseInt(note.slice(-1))
  const noteIndex = notes.indexOf(note.slice(0, -1))
  const N = noteIndex - 9 + (octave - 4) * 12
  const freq = A4 * Math.pow(2, N / 12)
  return freq.toFixed(1)
}

interface NoteInfoProps {
  activeNotes: string[]
}

export function NoteInfo({ activeNotes }: NoteInfoProps) {
  const notes = Array.isArray(activeNotes) ? activeNotes : []

  return (
    <div className="flex h-full flex-col gap-6 rounded-sm border bg-card py-6 text-card-foreground shadow-sm">
      <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto]">
        <div className="text-sm leading-none font-semibold">Active Notes</div>
      </div>
      <div className="px-6">
        <ScrollArea className="h-20 w-full">
          <div className="flex flex-wrap gap-1">
            {notes.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No notes playing...
              </p>
            ) : (
              notes.map((note) => (
                <div
                  key={note}
                  className="flex flex-none items-center justify-center px-2 py-1"
                >
                  <span className="text-xs">{note}</span>
                  <span className="ml-1 text-[10px] text-muted-foreground">
                    {getNoteFrequency(note)}Hz
                  </span>
                </div>
              ))
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
