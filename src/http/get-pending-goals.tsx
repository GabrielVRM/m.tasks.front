type PendingGoalsType = {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completeCount: number
}[]
const apiUrl = import.meta.env.VITE_API_URL_DEV

export async function getPendingGoals(): Promise<PendingGoalsType> {
  const response = await fetch(`${apiUrl}/pending-goals`)
  const data = await response.json()
  return data
}
