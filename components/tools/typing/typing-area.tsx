'use client'

import { useState, useEffect, RefObject } from 'react'
import { cn } from '@/lib/utils'

interface UseCursorMovementProps {
  textContainerRef: RefObject<HTMLDivElement | null>
  currentPosition: number
  currentQuote: string
  userInput: string
}

function useCursorMovement({
  textContainerRef,
  currentPosition,
  currentQuote,
  userInput,
}: UseCursorMovementProps) {
  const [cursorStyle, setCursorStyle] = useState({
    left: 0,
    top: 0,
    height: 0,
  })

  useEffect(() => {
    if (textContainerRef.current) {
      const textContainer = textContainerRef.current
      const chars = textContainer.querySelectorAll('span[data-char]')

      if (chars.length > 0 && currentPosition < chars.length) {
        const currentChar = chars[currentPosition] as HTMLElement
        const rect = currentChar.getBoundingClientRect()
        const containerRect = textContainer.getBoundingClientRect()

        setCursorStyle({
          left: rect.left - containerRect.left,
          top: rect.top - containerRect.top,
          height: rect.height,
        })
      } else if (chars.length > 0 && currentPosition === chars.length) {
        const lastChar = chars[chars.length - 1] as HTMLElement
        const rect = lastChar.getBoundingClientRect()
        const containerRect = textContainer.getBoundingClientRect()
        setCursorStyle({
          left: rect.left - containerRect.left + rect.width,
          top: rect.top - containerRect.top,
          height: rect.height,
        })
      } else {
        setCursorStyle({ left: 0, top: 0, height: 0 })
      }
    }
  }, [currentPosition, currentQuote, userInput, textContainerRef])

  return { cursorStyle }
}

interface TypingAreaProps {
  currentQuote: string
  userInput: string
  currentPosition: number
  isStarted: boolean
  onKeyDown: (e: React.KeyboardEvent) => void
  textContainerRef: RefObject<HTMLDivElement | null>
}

export function TypingArea({
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
