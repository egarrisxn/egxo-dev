import { DEFAULT_SETTINGS } from '@/lib/data'
import type { PomodoroTimerSettings, TaskItem } from '@/lib/types'

// State initialization
const loadSettings = (): PomodoroTimerSettings => {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS
  const saved = localStorage.getItem('pomodoroSettings')
  return saved ? JSON.parse(saved) : DEFAULT_SETTINGS
}

// Get settings only once during the initial render
export const initialSettings = loadSettings()

// Load tasks from localStorage once on initial render
export const loadInitialTasks = (): TaskItem[] => {
  if (typeof window === 'undefined') return []
  const savedTasks = localStorage.getItem('focusTasks')
  try {
    return savedTasks ? JSON.parse(savedTasks) : []
  } catch (error) {
    console.error('Error parsing tasks from localStorage:', error)
    return []
  }
}
