import type { ComponentType, SVGProps } from 'react'

export interface Links {
  label: string
  href: string
}

export interface WorkExperience {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

export interface BlogPost {
  year: number
  title: string
  description: string
  link: string
  uid: string
}

export interface ProjectBase {
  id: string
  name: string
  description: string
  link: string
  thumbnail: string
}

export interface ProjectWithVideo extends ProjectBase {
  video: string
}

export interface ProjectWithoutVideo extends ProjectBase {
  video?: never
}

export interface AboutTab {
  title: string
  subtitle: string
  content: string
}

export interface PaletteColorShade {
  hex: string
  shade: number
  hue: number
  saturation: number
  lightness: number
}

export interface PaletteAccessibilityScore {
  background: PaletteColorShade
  foreground: PaletteColorShade
  ratio: number
  level: string
  pass: boolean
}

export interface ButtonVariant {
  name: string
  color: string
}

export interface ButtonGroups {
  name: string
  variants: ButtonVariant[]
}

export type DrawingEvent =
  | React.MouseEvent<HTMLCanvasElement>
  | React.TouchEvent<HTMLCanvasElement>

export type PomodoroTimerMode = 'work' | 'break'

export type PomodoroTimerPreset = '25/5' | '50/10' | '90/20' | 'custom'

export interface PomodoroTimerSettings {
  workTime: number
  breakTime: number
  preset: PomodoroTimerPreset
}

export interface TaskItem {
  id: string
  text: string
  completed: boolean
}

export type QRCorrectionLevel = 'L' | 'M' | 'Q' | 'H'

export interface Transcript {
  id: string
  text: string
  timestamp: number
  isFinal: boolean
}

export interface SpeechRecognitionAlternative {
  transcript: string
}

export interface SpeechRecognitionResult {
  readonly isFinal: boolean
  readonly length: number
  item(index: number): SpeechRecognitionAlternative
  [index: number]: SpeechRecognitionAlternative
}

export interface SpeechRecognitionResultList {
  readonly length: number
  item(index: number): SpeechRecognitionResult
  [index: number]: SpeechRecognitionResult
}

export interface SpeechRecognitionEvent extends Event {
  readonly resultIndex: number
  readonly results: SpeechRecognitionResultList
}

export interface SpeechRecognitionErrorEvent extends Event {
  readonly error: string
}

export interface ISpeechRecognition extends EventTarget {
  continuous: boolean
  interimResults: boolean
  lang: string
  start: () => void
  stop: () => void
  onresult: ((event: SpeechRecognitionEvent) => void) | null
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null
  onend: (() => void) | null
}

export type SpeechRecognitionConstructor = new () => ISpeechRecognition

export interface TypingLeaderboardEntry {
  name: string
  wpm: number
  accuracy: number
  timestamp: number
}

export interface SynthKeys {
  key: string
  note: string
  label: string
}

export interface OffsetSynthKeys extends SynthKeys {
  offset: number
}

export type ThemeId = 'light' | 'dark' | 'system'

export type LinkVariant = 'back' | 'more' | 'external'

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

export type PresetAnimationType =
  | 'blur'
  | 'fade-in-blur'
  | 'scale'
  | 'fade'
  | 'slide'

export type PerAnimationType = 'word' | 'char' | 'line'
