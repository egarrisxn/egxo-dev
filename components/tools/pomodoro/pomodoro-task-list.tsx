'use client'

import { useState, useEffect } from 'react'
import { PlusIcon, TrashIcon } from '@/components/icons'
import { loadInitialTasks } from '@/helpers/pomodoro-timer'
import type { TaskItem } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

export default function PomodoroTaskList() {
  // Initialize state directly using the result of loadInitialTasks()
  const [tasks, setTasks] = useState<TaskItem[]>(loadInitialTasks)
  const [newTaskText, setNewTaskText] = useState('')

  useEffect(() => {
    localStorage.setItem('focusTasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {
    if (!newTaskText.trim()) return

    const newTask: TaskItem = {
      id: Date.now().toString(),
      text: newTaskText,
      completed: false,
    }

    setTasks([...tasks, newTask])
    setNewTaskText('')
  }

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  const removeTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const handleKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTask()
    }
  }

  return (
    <div className="flex h-fit w-full max-w-96 min-w-80 flex-col gap-6 text-card-foreground sm:max-w-96 sm:min-w-96 sm:rounded-xl sm:border sm:border-border sm:bg-card sm:py-6 sm:shadow-lg xl:min-w-[26em]">
      <div className="rid-rows-[auto_auto] grid auto-rows-min items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] xl:hidden">
        <div className="mx-auto text-lg leading-none font-bold">Task List</div>
      </div>
      <div className="px-6">
        <div className="flex space-x-2">
          <input
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            onKeyUp={handleKeyUp}
            placeholder="Add task..."
            className="h-9 w-full min-w-0 grow rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40"
          />
          <Button onClick={addTask} size="icon">
            <PlusIcon />
          </Button>
        </div>
        <div className="max-h-60 space-y-1 overflow-y-auto py-2 xl:max-h-none">
          {tasks.length === 0 ? (
            <p className="pt-2 text-center text-sm text-primary/50 italic">
              No tasks
            </p>
          ) : (
            tasks.map((task) => (
              <div
                key={task.id}
                className={`group flex items-center rounded p-1.5 ${task.completed ? 'bg-primary/5' : ''}`}
              >
                <Checkbox
                  checked={task.completed}
                  onCheckedChange={() => toggleTask(task.id)}
                  className="mr-2"
                />
                <span
                  className={`flex-1 text-sm text-primary ${task.completed ? 'text-primary/40 line-through' : ''}`}
                >
                  {task.text}
                </span>
                <Button
                  size="icon"
                  onClick={() => removeTask(task.id)}
                  className="size-4 p-2.5 text-primary/50 opacity-0 group-hover:opacity-100 hover:bg-transparent hover:text-primary/70"
                >
                  <TrashIcon className="size-2" />
                </Button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
