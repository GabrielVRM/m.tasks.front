interface DeleteGoalsType {
  id: string
}

const apiUrl = import.meta.env.VITE_API_URL_DEV
console.log(apiUrl)
export async function deleteGoals(id: DeleteGoalsType) {
  console.log(id)
  const result = await fetch(`${apiUrl}/goals-delete/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
  })
}
