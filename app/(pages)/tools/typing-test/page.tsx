import TypingTest from '@/components/tools/typing/typing-test'
import { TYPING_TESTS } from '@/lib/data'

export default function TypingTestPage() {
  return (
    <div className="mt-16">
      <div className="flex flex-col items-center justify-center text-card-foreground sm:rounded-2xl sm:border sm:border-accent-foreground/40 sm:bg-card sm:py-24 sm:shadow-md sm:ring-1 sm:ring-muted/50 sm:ring-inset">
        <TypingTest quotes={TYPING_TESTS} />
      </div>
    </div>
  )
}
