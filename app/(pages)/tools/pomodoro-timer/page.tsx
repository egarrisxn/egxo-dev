import PomodoroTimer from '@/components/tools/pomodoro/pomodoro-timer'
import PomodoroTaskList from '@/components/tools/pomodoro/pomodoro-task-list'

export default function PomodoroTimerPage() {
  return (
    <div className="mt-16">
      <div className="flex flex-col items-center justify-center gap-8">
        <PomodoroTimer />
        <PomodoroTaskList />
      </div>
    </div>
  )
}
