interface CreateGoalsType {
  title: string
  desiredWeeklyFrequency: number
}

export async function createGoals({
  title,
  desiredWeeklyFrequency,
}: CreateGoalsType) {
  await fetch('http://localhost:3333/goals', {
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
