import { useState, useEffect, useCallback, useRef } from 'react'
import { pickRandomQuote } from '@/helpers/typing-test'

interface UseTypingTestProps {
  quotes: string[]
}

export function useTypingTest({ quotes }: UseTypingTestProps) {
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
