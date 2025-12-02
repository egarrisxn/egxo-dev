'use client'

import { toast } from 'sonner'
import { BUTTON_COPY_GROUPS } from '@/lib/data'
import ButtonGroup from '@/components/tools/button/button-group'

export default function ButtonCopy() {
  const copyButtonCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code)

      toast.success('CSS copied to clipboard!', {
        description: 'The button style code is ready to paste.',
        duration: 3000,
      })
    } catch (err) {
      toast.error('Failed to copy code.', {
        description:
          'Clipboard access denied. Please try again or copy manually.',
      })
      console.error('Failed to copy:', err)
    }
  }

  return (
    <section className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      {BUTTON_COPY_GROUPS.map((group, index) => (
        <ButtonGroup
          key={group.name || index}
          group={group}
          onCopy={copyButtonCode}
        />
      ))}
    </section>
  )
}
