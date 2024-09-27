import { Plus } from 'lucide-react'
import { OutlineButton } from './ui/outline-button'
import { getPendingGoals } from '../http/get-pending-goals'
import { useQueryClient, useQuery } from '@tanstack/react-query'
import { createGoalsCompletions } from '../http/create-goal-completions'

export function PendingGoals() {
  const { data } = useQuery({
    queryKey: ['pending-goals'],
    queryFn: getPendingGoals,
    staleTime: 1000 * 60, // 60 seconds
  })
  const queryClient = useQueryClient()

  if (!data) {
    return null
  }

  async function handleCompletions(goalId: string) {
    await createGoalsCompletions(goalId)

    queryClient.invalidateQueries({ queryKey: ['summary'] })
    queryClient.invalidateQueries({ queryKey: ['pending-goals'] })
  }

  return (
    <div className="flex flex-wrap gap-3">
      {data.map(goal => {
        return (
          <OutlineButton
            key={goal.id}
            disabled={goal.completeCount >= goal.desiredWeeklyFrequency}
            onClick={() => handleCompletions(goal.id)}
          >
            <Plus className="size-4 text-zinc-600" /> {goal.title}
          </OutlineButton>
        )
      })}
    </div>
  )
}
