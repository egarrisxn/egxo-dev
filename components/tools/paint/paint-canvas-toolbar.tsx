'use client'

import { Button } from '@/components/ui/button'

interface PaintCanvasToolbarProps {
  selectedTool: string
  onToolSelect: (tool: string) => void
}

export default function PaintCanvasToolbar({
  selectedTool,
  onToolSelect,
}: PaintCanvasToolbarProps) {
  return (
    <aside className="w-8 border-r border-border bg-card p-0.5">
      <Button
        variant="ghost"
        className={`mb-0.5 size-7 min-w-0 p-0 ${
          selectedTool === 'brush'
            ? 'border border-border bg-card shadow-inner'
            : ''
        }`}
        onClick={() => onToolSelect('brush')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-5"
        >
          <path d="M18 12l-8-8-6 6c-2 2-2 5 0 7s5 2 7 0l7-7" />
          <path d="M17 7l3 3" />
        </svg>
      </Button>
      <Button
        variant="ghost"
        className={`mb-0.5 size-7 min-w-0 p-0 ${
          selectedTool === 'eraser'
            ? 'border border-border bg-card shadow-inner'
            : ''
        }`}
        onClick={() => onToolSelect('eraser')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-5"
        >
          <path d="M20 20H7L3 16C2 15 2 13 3 12L13 2L22 11L20 20Z" />
          <path d="M17 17L7 7" />
        </svg>
      </Button>
    </aside>
  )
}
