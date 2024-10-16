const apiUrl = import.meta.env.VITE_API_URL_DEV

type SessionSinIpBody = {
  email: string
  password: string
}
type SessionSinUpBody = {
  name: string
  email: string
  password: string
}
export async function auth({ email, password }: SessionSinIpBody) {
  const response = await fetch(`${apiUrl}/session`, {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
  const data = await response.json()
  return data
}

export async function createLogin({ name, email, password }: SessionSinUpBody) {
  const response = await fetch(`${apiUrl}/users`, {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  })
  const data = await response.json()
  return data
}
