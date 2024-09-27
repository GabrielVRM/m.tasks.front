export async function createGoalsCompletions(goalId: string) {
  const response = await fetch(
    'https://m-tasks-5ba7.onrender.com/completions',
    {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ goalId }),
    }
  )
  const data = await response.json()
  return data
}
