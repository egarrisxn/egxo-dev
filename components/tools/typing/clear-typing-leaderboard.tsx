'use client'

import { Button } from '@/components/ui/button'

interface ClearTypingLeaderboardProps {
  onClear: () => void
}

export default function ClearTypingLeaderboard({
  onClear,
}: ClearTypingLeaderboardProps) {
  return (
    <Button
      onClick={onClear}
      className="text-sm text-red-600 underline"
      variant="link"
    >
      Clear Leaderboard
    </Button>
  )
}
