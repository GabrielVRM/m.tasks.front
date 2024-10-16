interface CreateGoalsType {
  title: string
  desiredWeeklyFrequency: number
}
const apiUrl = import.meta.env.VITE_API_URL_DEV

export async function createGoals({
  title,
  desiredWeeklyFrequency,
}: CreateGoalsType) {
  const token = localStorage.getItem('token')

  await fetch(`${apiUrl}/goals/${token}`, {
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
