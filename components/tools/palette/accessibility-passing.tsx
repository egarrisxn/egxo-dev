import { Check } from 'lucide-react'
import type { PaletteAccessibilityScore } from '@/lib/types'

interface AccessibilityPassingProps {
  combinations: PaletteAccessibilityScore[]
}

export default function AccessibilityPassing({
  combinations,
}: AccessibilityPassingProps) {
  return (
    <div>
      <h4 className="mb-2 flex items-center text-sm font-medium text-green-600 dark:text-green-400">
        <Check className="mr-1 size-4" /> Accessible Combinations
      </h4>
      <div className="custom-scrollbar grid max-h-48 grid-cols-1 gap-2 overflow-y-auto pr-2">
        {combinations.length > 0 ? (
          combinations.map((score, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded border border-green-100 bg-green-50 p-2 dark:border-green-900 dark:bg-green-900/20"
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <div
                    className="flex size-6 items-center justify-center rounded-l text-xs font-medium"
                    style={{
                      backgroundColor: score.background.hex,
                      color: score.foreground.hex,
                      border: '1px solid rgba(0,0,0,0.1)',
                    }}
                  >
                    A
                  </div>
                  <div
                    className="flex size-6 items-center justify-center rounded-r text-xs font-medium"
                    style={{
                      backgroundColor: score.foreground.hex,
                      color: score.background.hex,
                      border: '1px solid rgba(0,0,0,0.1)',
                    }}
                  >
                    A
                  </div>
                </div>
                <div className="text-xs">
                  <span className="font-medium">{score.background.shade}</span>
                  {' + '}
                  <span className="font-medium">{score.foreground.shade}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium">
                  {score.ratio.toFixed(2)}:1
                </span>
                <div className="rounded bg-green-100 px-1.5 py-0.5 text-xs text-green-800 dark:bg-green-900 dark:text-green-200">
                  {score.level}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-sm text-gray-500 italic">
            No accessible combinations found
          </div>
        )}
      </div>
    </div>
  )
}
