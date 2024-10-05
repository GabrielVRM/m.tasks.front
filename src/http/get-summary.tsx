type SummaryType = {
  completed: number
  total: number
  goalsPerDay: Record<
    string,
    {
      id: string
      title: string
      completedAt: string
    }[]
  >
}
const apiUrl = import.meta.env.VITE_API_URL_DEV

export async function getSummary(): Promise<SummaryType> {
  const response = await fetch(`${apiUrl}/summary`)
  const data = await response.json()

  return data.summary
}
