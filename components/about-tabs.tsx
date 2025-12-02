'use client'

import { useState } from 'react'
import { ABOUT_ITEMS } from '@/lib/data'
import { TransitionPanel } from '@/components/ui/transition-panel'

export function AboutTabs() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div>
      <div className="mb-4 flex space-x-2">
        {ABOUT_ITEMS.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`cursor-pointer rounded-md px-3 py-1 text-xs font-medium sm:text-sm ${
              activeIndex === index
                ? 'bg-zinc-200 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-100'
                : 'bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-300'
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="overflow-hidden border-t border-zinc-200 dark:border-zinc-700">
        <TransitionPanel
          activeIndex={activeIndex}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          variants={{
            enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
            center: { opacity: 1, y: 0, filter: 'blur(0px)' },
            exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
          }}
        >
          {ABOUT_ITEMS.map((item, index) => (
            <div key={index} className="py-2">
              <h3 className="mb-2 font-medium text-zinc-800 dark:text-zinc-100">
                {item.subtitle}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300">{item.content}</p>
            </div>
          ))}
        </TransitionPanel>
      </div>
    </div>
  )
}
