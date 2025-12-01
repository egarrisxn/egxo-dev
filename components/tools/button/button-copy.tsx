'use client'

import { toast } from 'sonner'
import ButtonGroup from './button-group'

const buttonGroups = [
  {
    name: 'Default',
    variants: [
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
      { name: 'green', color: '#22c55e' },
      { name: 'orange', color: '#f59e0b' },
      { name: 'red', color: '#ef4444' },
    ],
  },
  {
    name: 'Rounded',
    variants: [
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
      { name: 'green', color: '#22c55e' },
      { name: 'orange', color: '#f59e0b' },
      { name: 'red', color: '#ef4444' },
    ],
  },
  {
    name: 'Gradient',
    variants: [
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
      { name: 'green', color: '#22c55e' },
      { name: 'orange', color: '#f59e0b' },
      { name: 'red', color: '#ef4444' },
    ],
  },
  {
    name: 'Wave',
    variants: [
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
      { name: 'green', color: '#22c55e' },
      { name: 'orange', color: '#f59e0b' },
      { name: 'red', color: '#ef4444' },
    ],
  },
  {
    name: 'Fold',
    variants: [
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
      { name: 'green', color: '#22c55e' },
      { name: 'orange', color: '#f59e0b' },
      { name: 'red', color: '#ef4444' },
    ],
  },
  {
    name: 'Pop',
    variants: [
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
      { name: 'green', color: '#22c55e' },
      { name: 'orange', color: '#f59e0b' },
      { name: 'red', color: '#ef4444' },
    ],
  },
  {
    name: 'Outline',
    variants: [
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
      { name: 'green', color: '#22c55e' },
      { name: 'orange', color: '#f59e0b' },
      { name: 'red', color: '#ef4444' },
    ],
  },
  {
    name: 'Glow',
    variants: [
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
      { name: 'green', color: '#22c55e' },
      { name: 'orange', color: '#f59e0b' },
      { name: 'red', color: '#ef4444' },
    ],
  },
  {
    name: 'Neon',
    variants: [
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
      { name: 'green', color: '#22c55e' },
      { name: 'orange', color: '#f59e0b' },
      { name: 'red', color: '#ef4444' },
    ],
  },
  {
    name: 'Liquid',
    variants: [
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
      { name: 'green', color: '#22c55e' },
      { name: 'orange', color: '#f59e0b' },
      { name: 'red', color: '#ef4444' },
    ],
  },
  {
    name: 'Retro',
    variants: [
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
      { name: 'green', color: '#22c55e' },
      { name: 'orange', color: '#f59e0b' },
      { name: 'red', color: '#ef4444' },
    ],
  },
  {
    name: 'Glitch',
    variants: [
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
      { name: 'green', color: '#22c55e' },
      { name: 'orange', color: '#f59e0b' },
      { name: 'red', color: '#ef4444' },
    ],
  },
  {
    name: 'Bubble',
    variants: [
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
      { name: 'green', color: '#22c55e' },
      { name: 'orange', color: '#f59e0b' },
      { name: 'red', color: '#ef4444' },
    ],
  },
  {
    name: 'Appearance',
    variants: [
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
      { name: 'green', color: '#22c55e' },
      { name: 'orange', color: '#f59e0b' },
      { name: 'red', color: '#ef4444' },
    ],
  },
  {
    name: 'Metallic',
    variants: [
      { name: 'light', color: '#ffffff' },
      { name: 'gray', color: '#d9d9d9' },
      { name: 'dark', color: '#1f2937' },
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
    ],
  },
  {
    name: 'Glass',
    variants: [
      { name: 'light', color: '#ffffff' },
      { name: 'gray', color: '#d9d9d9' },
      { name: 'dark', color: '#1f2937' },
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
    ],
  },
  {
    name: 'Neumorphic',
    variants: [
      { name: 'light', color: '#ffffff' },
      { name: 'gray', color: '#d9d9d9' },
      { name: 'dark', color: '#1f2937' },
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
    ],
  },
  {
    name: 'Loading',
    variants: [
      { name: 'light', color: '#ffffff' },
      { name: 'gray', color: '#d9d9d9' },
      { name: 'dark', color: '#1f2937' },
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
    ],
  },
  {
    name: 'Progress',
    variants: [
      { name: 'light', color: '#ffffff' },
      { name: 'gray', color: '#d9d9d9' },
      { name: 'dark', color: '#1f2937' },
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
    ],
  },
  {
    name: 'Success',
    variants: [
      { name: 'light', color: '#ffffff' },
      { name: 'gray', color: '#d9d9d9' },
      { name: 'dark', color: '#1f2937' },
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
    ],
  },
  {
    name: 'Error',
    variants: [
      { name: 'light', color: '#ffffff' },
      { name: 'gray', color: '#d9d9d9' },
      { name: 'dark', color: '#1f2937' },
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
    ],
  },
]

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
      {buttonGroups.map((group, index) => (
        <ButtonGroup
          key={group.name || index}
          group={group}
          onCopy={copyButtonCode}
        />
      ))}
    </section>
  )
}
