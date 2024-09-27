interface CreateGoalsType {
  title: string
  desiredWeeklyFrequency: number
}

export async function createGoals({
  title,
  desiredWeeklyFrequency,
}: CreateGoalsType) {
  await fetch('https://m-tasks-5ba7.onrender.com/goals', {
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
