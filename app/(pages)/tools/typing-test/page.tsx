import TypingTest from '@/components/tools/typing/typing-test'
import { typingQuotes } from '@/lib/helpers/typing-helpers'

export default function TypingTestPage() {
  return (
    <div className="mt-16">
      <div className="flex flex-col items-center justify-center sm:rounded-xl sm:border sm:border-border sm:bg-card sm:py-24 sm:shadow-lg">
        <TypingTest quotes={typingQuotes} />
      </div>
    </div>
  )
}
