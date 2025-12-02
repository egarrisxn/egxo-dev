'use client'

import { useState } from 'react'
import type { TypingLeaderboardEntry } from '@/lib/types'
import { Button } from '@/components/ui/button'
import ClearTypingLeaderboard from '@/components/tools/typing/clear-typing-leaderboard'

interface TypingLeaderboardProps {
  wpm: number
  accuracy: number
  leaderboard: TypingLeaderboardEntry[]
  submitted: boolean
  onSubmitScore: (name: string) => void
  onResetGame: () => void
  onClearLeaderboard: () => void
}

export default function TypingLeaderboard({
  wpm,
  accuracy,
  leaderboard,
  submitted,
  onSubmitScore,
  onResetGame,
  onClearLeaderboard,
}: TypingLeaderboardProps) {
  const [name, setName] = useState('')

  const handleSubmit = () => {
    onSubmitScore(name)
  }

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-center text-lg font-semibold">
            “Good game, kid.”
          </h1>
          <div>
            <div className="text-lg font-semibold">Game Stats:</div>
            <div className="mt-2 text-xl text-muted-foreground">wpm</div>
            <div className="text-6xl font-bold">{wpm}</div>
            <div className="mt-4 text-xl text-muted-foreground">accuracy</div>
            <div className="text-6xl font-bold">{accuracy}%</div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center gap-6 text-center md:mt-0">
          <h3 className="text-center text-lg font-semibold">🏆 Leaderboard</h3>
          <hr className="mx-auto h-1 w-3/4" />
          {leaderboard.length > 0 && (
            <div className="w-full max-w-xs">
              <ol className="space-y-1">
                {leaderboard.map((entry, i) => (
                  <li
                    key={i}
                    className="flex justify-between rounded border bg-background/40 p-2 text-sm"
                  >
                    <span className="max-w-40 truncate font-medium">
                      {entry.name}
                    </span>
                    <span>
                      {entry.wpm} wpm · {entry.accuracy}%
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          )}
          {!submitted ? (
            <div className="w-full max-w-72 space-y-2">
              <input
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-center text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30"
              />
              <Button
                onClick={handleSubmit}
                className="w-full tracking-wide uppercase"
              >
                Submit Score
              </Button>
            </div>
          ) : (
            <div className="mt-2 text-sm text-green-600">Score submitted!</div>
          )}
          {leaderboard.length > 0 && (
            <div className="mt-4">
              <ClearTypingLeaderboard onClear={onClearLeaderboard} />
            </div>
          )}
        </div>
      </div>
      <div className="mt-16 flex w-full flex-col items-center justify-center">
        <Button onClick={onResetGame} className="tracking-wider uppercase">
          Try Again
        </Button>
      </div>
    </div>
  )
}
