'use client'

import { useState, useEffect, useCallback } from 'react'
import { Play, Pause, RotateCcw, Settings } from 'lucide-react'
import { initialSettings } from '@/helpers/pomodoro-timer'
import { DEFAULT_SETTINGS } from '@/lib/data'
import type {
  PomodoroTimerMode,
  PomodoroTimerPreset,
  PomodoroTimerSettings,
} from '@/lib/types'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function PomodoroTimer() {
  // Initialize state directly from loaded settings
  const [settings, setSettings] =
    useState<PomodoroTimerSettings>(initialSettings)
  const [timeLeft, setTimeLeft] = useState(initialSettings.workTime)
  const [isActive, setIsActive] = useState(false)
  const [mode, setMode] = useState<PomodoroTimerMode>('work')
  const [customWorkTime, setCustomWorkTime] = useState(
    Math.floor(initialSettings.workTime / 60),
  )
  const [customBreakTime, setCustomBreakTime] = useState(
    Math.floor(initialSettings.breakTime / 60),
  )
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Effect to save settings whenever they change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('pomodoroSettings', JSON.stringify(settings))
    }
  }, [settings])

  // Main Timer Logic
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1)
      }, 1000)
    } else if (isActive && timeLeft === 0) {
      // Calculate next state values based on the current state
      const nextMode: PomodoroTimerMode = mode === 'work' ? 'break' : 'work'
      const nextTime =
        nextMode === 'work' ? settings.workTime : settings.breakTime

      setTimeout(() => {
        setMode(nextMode)
        setTimeLeft(nextTime)
      }, 0)

      //! TODO: Add notification/sound effect here
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, timeLeft, mode, settings])

  const toggleTimer = () => {
    setIsActive(!isActive)
  }

  const resetTimer = () => {
    setIsActive(false)
    setMode('work')
    setTimeLeft(settings.workTime)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`
  }

  const calculateProgress = () => {
    const total = mode === 'work' ? settings.workTime : settings.breakTime
    // Prevent division by zero if total somehow becomes 0
    return total > 0 ? ((total - timeLeft) / total) * 100 : 0
  }

  const applyPreset = useCallback(
    (preset: PomodoroTimerPreset) => {
      let newSettings: PomodoroTimerSettings
      switch (preset) {
        case '25/5':
          newSettings = { workTime: 25 * 60, breakTime: 5 * 60, preset }
          break
        case '50/10':
          newSettings = { workTime: 50 * 60, breakTime: 10 * 60, preset }
          break
        case '90/20':
          newSettings = { workTime: 90 * 60, breakTime: 20 * 60, preset }
          break
        case 'custom':
          newSettings = {
            workTime: customWorkTime * 60,
            breakTime: customBreakTime * 60,
            preset: 'custom',
          }
          break
        default:
          newSettings = DEFAULT_SETTINGS
      }
      setSettings(newSettings)
      setIsActive(false)
      setMode('work')
      setTimeLeft(newSettings.workTime)

      // If applying the custom settings, close the dialog
      if (preset === 'custom') {
        setIsDialogOpen(false)
      }
    },
    [customWorkTime, customBreakTime],
  )

  // Handle preset change for Select component
  const handlePresetChange = (value: string) => {
    const preset = value as PomodoroTimerPreset
    // Only apply if it's not custom, or if it is custom, the button handles the apply
    if (preset !== 'custom') {
      applyPreset(preset)
    } else {
      setSettings((prev) => ({ ...prev, preset: 'custom' }))
    }
  }

  return (
    <div className="flex h-fit w-full max-w-96 min-w-80 flex-col gap-6 text-card-foreground sm:max-w-96 sm:min-w-96 sm:rounded-xl sm:border sm:border-border sm:bg-card sm:py-6 sm:shadow-lg xl:min-w-[26em]">
      <Progress value={calculateProgress()} />
      <div className="rid-rows-[auto_auto] grid auto-rows-min items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto]">
        <div className="mx-auto text-3xl leading-none font-bold">
          {mode === 'work' ? 'Focus Timer' : 'Break Time'}
        </div>
        <div
          className="mx-auto text-7xl text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: formatTime(timeLeft) }}
        />
      </div>

      <div className="mx-auto space-x-3 px-6">
        <Button onClick={toggleTimer} size="icon">
          {isActive ? <Pause /> : <Play />}
        </Button>
        <Button onClick={resetTimer} size="icon">
          <RotateCcw />
        </Button>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              size="icon"
              className="cursor-pointer opacity-60 transition-opacity hover:opacity-100"
            >
              <Settings />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Timer Settings</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-2">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm leading-none font-medium select-none">
                  Preset Timers
                </div>
                <Select
                  value={settings.preset}
                  onValueChange={handlePresetChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a preset" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="25/5">25/5 (Pomodoro)</SelectItem>
                    <SelectItem value="50/10">50/10 (Extended)</SelectItem>
                    <SelectItem value="90/20">90/20 (Deep Work)</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {settings.preset === 'custom' && (
                <>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2 text-sm leading-none font-medium select-none">
                        Work Time: {customWorkTime} minutes
                      </div>
                    </div>
                    <Slider
                      value={[customWorkTime]}
                      min={5}
                      max={120}
                      step={5}
                      onValueChange={(value) => setCustomWorkTime(value[0])}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2 text-sm leading-none font-medium select-none">
                        Break Time: {customBreakTime} minutes
                      </div>
                    </div>
                    <Slider
                      value={[customBreakTime]}
                      min={1}
                      max={30}
                      step={1}
                      onValueChange={(value) => setCustomBreakTime(value[0])}
                    />
                  </div>
                  <Button
                    onClick={() => applyPreset('custom')}
                    className="w-full"
                  >
                    Apply Custom Settings
                  </Button>
                </>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
