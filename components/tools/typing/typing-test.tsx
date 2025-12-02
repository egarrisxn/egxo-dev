'use client'

import { useRef } from 'react'
import { useTypingTest } from '@/hooks/typing-test/use-typing-test'
import { useTypingLeaderboard } from '@/hooks/typing-test/use-typing-leaderboard'
import { Button } from '@/components/ui/button'
import TypingArea from '@/components/tools/typing/typing-area'
import TypingStats from '@/components/tools/typing/typing-stats'
import TypingLeaderboard from '@/components/tools/typing/typing-leaderboard'

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
  } = useTypingLeaderboard()

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
      <TypingLeaderboard
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
      <TypingStats
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
