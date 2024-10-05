const apiUrl = import.meta.env.VITE_API_URL_DEV

export async function createGoalsCompletions(goalId: string) {
  const response = await fetch(`${apiUrl}/completions`, {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ goalId }),
  })
  const data = await response.json()
  return data
}
