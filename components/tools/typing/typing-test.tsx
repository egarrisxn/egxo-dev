'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { TypingArea } from './typing-area'
import { GameStats } from './game-stats'
import { Leaderboard } from './leaderboard'

interface UseTypingTestProps {
  quotes: string[]
}

const pickRandomQuote = (quotes: string[]): string => {
  if (!quotes || quotes.length === 0) return ''
  return quotes[Math.floor(Math.random() * quotes.length)]
}

function useTypingTest({ quotes }: UseTypingTestProps) {
  const [currentQuote, setCurrentQuote] = useState(() => quotes[0] ?? '')
  const [userInput, setUserInput] = useState('')
  const [startTime, setStartTime] = useState<number | null>(null)
  const [wpm, setWpm] = useState(0)
  const [liveWpm, setLiveWpm] = useState(0)
  const [accuracy, setAccuracy] = useState(100)
  const [isFinished, setIsFinished] = useState(false)
  const [isStarted, setIsStarted] = useState(false)
  const [currentPosition, setCurrentPosition] = useState(0)

  const wpmIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const calculateWPM = useCallback(() => {
    if (!startTime || !isStarted) return 0
    const timeInMinutes = (Date.now() - startTime) / 60000
    const wordCount = userInput.length / 5
    return timeInMinutes ? Math.round(wordCount / timeInMinutes) : 0
  }, [startTime, isStarted, userInput])

  const initGame = useCallback(() => {
    setCurrentQuote(pickRandomQuote(quotes))
    setUserInput('')
    setStartTime(null)
    setWpm(0)
    setLiveWpm(0)
    setAccuracy(100)
    setIsFinished(false)
    setIsStarted(false)
    setCurrentPosition(0)

    if (wpmIntervalRef.current) {
      clearInterval(wpmIntervalRef.current)
      wpmIntervalRef.current = null
    }
  }, [quotes])

  useEffect(() => {
    if (!isStarted || isFinished) {
      if (wpmIntervalRef.current) {
        clearInterval(wpmIntervalRef.current)
        wpmIntervalRef.current = null
      }
      return
    }

    const id = setInterval(() => {
      setLiveWpm(calculateWPM())
    }, 1000)

    wpmIntervalRef.current = id

    return () => {
      clearInterval(id)
      wpmIntervalRef.current = null
    }
  }, [isStarted, isFinished, calculateWPM])

  const handleUserInput = useCallback(
    (key: string) => {
      if (isFinished) return

      if (!isStarted && !startTime) {
        setStartTime(Date.now())
        setIsStarted(true)
      }

      if (key === 'Backspace') {
        if (currentPosition > 0) {
          setCurrentPosition((prev) => prev - 1)
          setUserInput((prev) => prev.slice(0, -1))
        }
        return
      }

      if (currentPosition >= currentQuote.length) return

      if (key.length === 1) {
        const newUserInput = userInput + key
        setUserInput(newUserInput)
        setCurrentPosition((prev) => prev + 1)

        let correctChars = 0
        for (let i = 0; i < newUserInput.length; i++) {
          if (i < currentQuote.length && newUserInput[i] === currentQuote[i]) {
            correctChars++
          }
        }

        const acc =
          newUserInput.length > 0
            ? Math.floor((correctChars / newUserInput.length) * 100)
            : 100
        setAccuracy(acc)

        const reachedEnd =
          newUserInput === currentQuote ||
          currentPosition + 1 >= currentQuote.length

        if (reachedEnd) {
          setIsFinished(true)
          setWpm(calculateWPM())
          if (wpmIntervalRef.current) {
            clearInterval(wpmIntervalRef.current)
            wpmIntervalRef.current = null
          }
        }
      }
    },
    [
      isFinished,
      isStarted,
      startTime,
      currentPosition,
      userInput,
      currentQuote,
      calculateWPM,
    ],
  )

  return {
    currentQuote,
    userInput,
    wpm,
    liveWpm,
    accuracy,
    isFinished,
    isStarted,
    currentPosition,
    handleUserInput,
    resetGame: initGame,
  }
}

interface LeaderboardEntry {
  name: string
  wpm: number
  accuracy: number
  timestamp: number
}

const STORAGE_KEY = 'typing-leaderboard'

const getLeaderboardFromStorage = (): LeaderboardEntry[] => {
  if (typeof window === 'undefined') return []

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    console.error('Failed to parse leaderboard from localStorage.')
    return []
  }
}

const saveLeaderboardToStorage = (entries: LeaderboardEntry[]) => {
  if (typeof window === 'undefined') return

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries))
  } catch (error) {
    console.error('Failed to save leaderboard to localStorage:', error)
  }
}

function useLeaderboard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>(() =>
    getLeaderboardFromStorage(),
  )
  const [submitted, setSubmitted] = useState(false)

  const addEntryToLeaderboard = useCallback(
    (newEntry: Omit<LeaderboardEntry, 'timestamp'>) => {
      const entry: LeaderboardEntry = {
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

    window.localStorage.removeItem(STORAGE_KEY)
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

interface TypingTestProps {
  quotes: string[]
}

export default function TypingTest({ quotes }: TypingTestProps) {
  const {
    currentQuote,
    userInput,
    wpm,
    liveWpm,
    accuracy,
    isFinished,
    isStarted,
    currentPosition,
    handleUserInput,
    resetGame,
  } = useTypingTest({ quotes })

  const {
    leaderboard,
    submitted,
    addEntryToLeaderboard,
    resetSubmissionStatus,
    refreshLeaderboard,
    clearLeaderboard,
  } = useLeaderboard()

  const textContainerRef = useRef<HTMLDivElement | null>(null)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (
      ['Shift', 'Control', 'Alt', 'Meta', 'Tab', 'CapsLock', 'Escape'].includes(
        e.key,
      )
    )
      return
    if (e.key !== 'Backspace') e.preventDefault()
    handleUserInput(e.key)
  }

  const handleGameReset = () => {
    resetGame()
    resetSubmissionStatus()
    refreshLeaderboard()
  }

  if (isFinished) {
    return (
      <Leaderboard
        wpm={wpm}
        accuracy={accuracy}
        leaderboard={leaderboard}
        submitted={submitted}
        onSubmitScore={(name) => addEntryToLeaderboard({ name, wpm, accuracy })}
        onResetGame={handleGameReset}
        onClearLeaderboard={clearLeaderboard}
      />
    )
  }

  return (
    <div className="flex w-full flex-col items-center gap-3">
      <TypingArea
        currentQuote={currentQuote}
        userInput={userInput}
        currentPosition={currentPosition}
        isStarted={isStarted}
        onKeyDown={handleKeyDown}
        textContainerRef={textContainerRef}
      />
      <GameStats
        liveWpm={liveWpm}
        isStarted={isStarted}
        isFinished={isFinished}
      />
      <Button
        onClick={handleGameReset}
        className="mt-2 text-xs tracking-wider uppercase"
      >
        Reset
      </Button>
    </div>
  )
}
