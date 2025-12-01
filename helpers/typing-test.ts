import type { TypingLeaderboardEntry } from '@/lib/types'
import { TYPING_STORAGE_KEY } from '@/lib/data'

export const pickRandomQuote = (quotes: string[]): string => {
  if (!quotes || quotes.length === 0) return ''
  return quotes[Math.floor(Math.random() * quotes.length)]
}

export const getLeaderboardFromStorage = (): TypingLeaderboardEntry[] => {
  if (typeof window === 'undefined') return []

  try {
    const raw = window.localStorage.getItem(TYPING_STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    console.error('Failed to parse leaderboard from localStorage.')
    return []
  }
}

export const saveLeaderboardToStorage = (entries: TypingLeaderboardEntry[]) => {
  if (typeof window === 'undefined') return

  try {
    window.localStorage.setItem(TYPING_STORAGE_KEY, JSON.stringify(entries))
  } catch (error) {
    console.error('Failed to save leaderboard to localStorage:', error)
  }
}
