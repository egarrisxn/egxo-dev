export const getNoteFrequency = (note: string): string => {
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

const notePositions: Record<string, number> = {
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

export const drawStaff = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
) => {
  ctx.clearRect(0, 0, width, height)
  ctx.strokeStyle = '#000'
  ctx.lineWidth = 1

  const lineSpacing = 20
  const staffHeight = lineSpacing * 4
  const startY = (height - staffHeight) / 2
  const staffWidth = width * 0.8
  const leftMargin = (width - staffWidth) / 2

  for (let i = 0; i < 5; i++) {
    const y = startY + i * lineSpacing
    ctx.beginPath()
    ctx.moveTo(leftMargin, y)
    ctx.lineTo(leftMargin + staffWidth, y)
    ctx.stroke()
  }
}

export const drawNote = (
  ctx: CanvasRenderingContext2D,
  height: number,
  note: string,
  x: number,
  opacity: number,
) => {
  const [name, octave] = note.split(/(\d+)/)
  const pos = notePositions[name]
  if (pos === undefined) return

  const spacing = 10
  const staffHeight = spacing * 4
  const startY = (height - staffHeight) / 2

  const y =
    startY +
    staffHeight -
    (pos * spacing) / 2 -
    (Number(octave) - 4) * 3.5 * spacing

  ctx.globalAlpha = opacity
  ctx.fillStyle = ctx.strokeStyle = '#000'

  ctx.beginPath()
  ctx.ellipse(x, y, 4, 3, 0, 0, Math.PI * 2)
  ctx.fill()

  ctx.beginPath()
  ctx.moveTo(x + 4, y)
  ctx.lineTo(x + 4, y - 20)
  ctx.stroke()

  ctx.globalAlpha = 1
}
