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

export async function getSummary(): Promise<SummaryType> {
  const response = await fetch('https://m-tasks-5ba7.onrender.com/summary')
  const data = await response.json()

  return data.summary
}
