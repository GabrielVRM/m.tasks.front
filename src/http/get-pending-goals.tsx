type PendingGoalsType = {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completeCount: number
}[]

export async function getPendingGoals(): Promise<PendingGoalsType> {
  const response = await fetch('https://m-tasks-5ba7.onrender.com/pending-goals')
  const data = await response.json()
  return data
}
