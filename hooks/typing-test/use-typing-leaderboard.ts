import { useState, useCallback } from 'react'
import {
  getLeaderboardFromStorage,
  saveLeaderboardToStorage,
} from '@/helpers/typing-test'
import { TYPING_STORAGE_KEY } from '@/lib/data'
import type { TypingLeaderboardEntry } from '@/lib/types'

export function useTypingLeaderboard() {
  const [leaderboard, setLeaderboard] = useState<TypingLeaderboardEntry[]>(() =>
    getLeaderboardFromStorage(),
  )
  const [submitted, setSubmitted] = useState(false)

  const addEntryToLeaderboard = useCallback(
    (newEntry: Omit<TypingLeaderboardEntry, 'timestamp'>) => {
      const entry: TypingLeaderboardEntry = {
        ...newEntry,
        timestamp: Date.now(),
      }

      const updated = [entry, ...getLeaderboardFromStorage()]
        .sort(
          (a, b) =>
            b.wpm - a.wpm ||
            b.accuracy - a.accuracy ||
            b.timestamp - a.timestamp,
        )
        .slice(0, 10)

      saveLeaderboardToStorage(updated)
      setLeaderboard(updated)
      setSubmitted(true)
    },
    [],
  )
  const clearLeaderboard = useCallback(() => {
    if (typeof window === 'undefined') return

    window.localStorage.removeItem(TYPING_STORAGE_KEY)
    setLeaderboard([])
  }, [])

  const resetSubmissionStatus = useCallback(() => {
    setSubmitted(false)
  }, [])

  const refreshLeaderboard = useCallback(() => {
    setLeaderboard(getLeaderboardFromStorage())
  }, [])

  return {
    leaderboard,
    submitted,
    addEntryToLeaderboard,
    resetSubmissionStatus,
    refreshLeaderboard,
    clearLeaderboard,
  }
}
