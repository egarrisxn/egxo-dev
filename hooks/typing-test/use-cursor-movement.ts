import { useState, useEffect, RefObject } from 'react'

interface UseCursorMovementProps {
  textContainerRef: RefObject<HTMLDivElement | null>
  currentPosition: number
  currentQuote: string
  userInput: string
}

export function useCursorMovement({
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
