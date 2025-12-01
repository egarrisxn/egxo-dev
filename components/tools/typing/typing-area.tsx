'use client'

import type { RefObject } from 'react'
import { useCursorMovement } from '@/hooks/typing-test/use-cursor-movement'
import { cn } from '@/lib/utils'

interface TypingAreaProps {
  currentQuote: string
  userInput: string
  currentPosition: number
  isStarted: boolean
  onKeyDown: (e: React.KeyboardEvent) => void
  textContainerRef: RefObject<HTMLDivElement | null>
}

export default function TypingArea({
  currentQuote,
  userInput,
  currentPosition,
  isStarted,
  onKeyDown,
  textContainerRef,
}: TypingAreaProps) {
  const { cursorStyle } = useCursorMovement({
    textContainerRef,
    currentPosition,
    currentQuote,
    userInput,
  })

  return (
    <div
      ref={textContainerRef}
      tabIndex={0}
      onKeyDown={onKeyDown}
      className="max-h-80 w-full max-w-3xl overflow-y-auto focus:outline-none"
    >
      <div className="relative text-lg leading-relaxed md:text-xl">
        <span
          className={cn(
            'absolute w-0.5 bg-blue-400 will-change-transform',
            isStarted ? '' : 'animate-cursor',
          )}
          style={{
            left: `${cursorStyle.left}px`,
            top: `${cursorStyle.top}px`,
            height: `${cursorStyle.height}px`,
            transition: 'all 30ms cubic-bezier(0.25, 0.1, 0.25, 1.0)',
          }}
        />
        {currentQuote.split('').map((char, index) => {
          let style = 'opacity-40'
          if (index < userInput.length) {
            style =
              userInput[index] === char
                ? 'opacity-100'
                : 'text-red-500 opacity-100'
          }
          return (
            <span key={index} data-char={char} className={style}>
              {char}
            </span>
          )
        })}
      </div>
    </div>
  )
}
