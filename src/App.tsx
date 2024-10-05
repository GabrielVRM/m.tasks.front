import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/create-goals'
import { EmptyGoals } from './components/empty-goals'
import { Summary } from './components/summary'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'
import React from 'react'
import { SingIn } from './auth/singIn'
import { getPendingGoals } from './http/get-pending-goals'

export function App() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, // 60 seconds
  })
  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ['pending-goals'],
  //   queryFn: getPendingGoals,
  //   staleTime: 1000 * 60, // 60 seconds
  // })

  if (isLoading) {
    return <div>Loading...</div> // Renderiza um indicador de carregamento
  }

  if (isError) {
    return <div>Erro ao carregar dados.</div> // Renderiza uma mensagem de erro
  }
  return (
    <Dialog>
      {/* <SingIn /> */}

      {data && data.total > 0 ? <Summary /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  )
}
