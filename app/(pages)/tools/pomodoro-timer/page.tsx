import PomodoroTimer from '@/components/tools/pomodoro/pomodoro-timer'
import TaskList from '@/components/tools/pomodoro/task-list'

export default function PomodoroTimerPage() {
  return (
    <div className="mt-16">
      <div className="flex flex-col items-center justify-center gap-8">
        <PomodoroTimer />
        <TaskList />
      </div>
    </div>
  )
}
