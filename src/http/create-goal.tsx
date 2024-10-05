interface CreateGoalsType {
  title: string
  desiredWeeklyFrequency: number
}
const apiUrl = import.meta.env.VITE_API_URL_DEV

export async function createGoals({
  title,
  desiredWeeklyFrequency,
}: CreateGoalsType) {
  await fetch(`${apiUrl}/goals`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      title,
      desiredWeeklyFrequency,
    }),
  })
}
