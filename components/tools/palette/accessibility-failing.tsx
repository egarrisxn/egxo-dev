import type { PaletteAccessibilityScore } from '@/lib/types'
import { AlertCircleIcon } from '@/components/icons'

interface AccessibilityFailingProps {
  combinations: PaletteAccessibilityScore[]
}

export default function AccessibilityFailing({
  combinations,
}: AccessibilityFailingProps) {
  return (
    <div>
      <h4 className="mb-2 flex items-center text-sm font-medium text-red-600 dark:text-red-400">
        <AlertCircleIcon className="mr-1 size-4" /> Inaccessible Combinations
      </h4>
      <div className="custom-scrollbar grid max-h-48 grid-cols-1 gap-1.5 overflow-y-auto pr-2 pb-1.5">
        {combinations.length > 0 ? (
          combinations.map((score, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-md border border-red-100 bg-red-50 p-2 dark:border-red-900 dark:bg-red-900/20"
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
                <div className="dark:bg-900 rounded-md bg-red-100 px-1.5 py-0.5 text-xs text-red-800 dark:text-red-200">
                  {score.level}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-sm text-gray-500 italic">
            All combinations are accessible!
          </div>
        )}
      </div>
    </div>
  )
}
