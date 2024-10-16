import { Dialog } from './components/ui/dialog'

import { CreateGoal } from './components/create-goals'
import { EmptyGoals } from './components/empty-goals'
import { getSummary } from './http/get-summary'
import { useQuery } from '@tanstack/react-query'
import { Summary } from './components/summary'
import * as Auth from './auth'
import { useState } from 'react'

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>()
  console.log(` hello: ${isAuthenticated}`)
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, // 60 seconds
  })
  console.log(data)
  return (
    <Dialog>
      {localStorage.getItem('token') !== null ? (
        data && data.total > 0 ? (
          <Summary />
        ) : (
          <EmptyGoals />
        )
      ) : (
        <Auth.SingIn setIsAuthenticated={setIsAuthenticated} />
      )}
      <CreateGoal />
    </Dialog>
  )
}
