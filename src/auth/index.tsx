import { useState } from 'react'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Separator } from '../components/ui/separator'
import brava from '../assets/brava.png'
import * as auth from '../http/auth'

import { Button } from '../components/ui/button'
// import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from '../http/get-summary'
import Swal from 'sweetalert2'

export function SingIn({ setIsAuthenticated }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const navigate = useNavigate()

  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, // 60 seconds
  })
  const handleAuth = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log(data)
    try {
      const dado = await auth.auth({ email, password })
      localStorage.setItem('token', dado.verifyEmail[0].id)
      setIsAuthenticated(true)

      // data && data.total > 0 ? navigate('/summary') : navigate('/emptygoals')
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: toast => {
          toast.onmouseenter = Swal.stopTimer
          toast.onmouseleave = Swal.resumeTimer
        },
      })
      Toast.fire({
        icon: 'success',
        title: 'login efetuado com sucesso',
      })
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Por favor, verifique seu email ou senha',
        confirmButtonText: 'Ok',
        imageUrl: brava,
        imageWidth: 300,
        imageHeight: 400,
      })
      console.error('Erro de autenticação:', error)
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="flex flex-col gap-6" onSubmit={handleAuth}>
        <div className=" flex flex-col ">
          <Label htmlFor="title">E-mail</Label>
          <Input
            title="E-mail"
            placeholder="E-mail"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <Separator />
        <div className="flex flex-col">
          <Label htmlFor="title">Password</Label>
          <Input
            title="Password"
            placeholder="password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit">Login</Button>
      </form>
    </div>
  )
}

export function SingUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleAuth = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const dado = await auth.createLogin({ name, email, password })
    console.log({ name, email, password })
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="flex flex-col gap-6" onSubmit={handleAuth}>
        <div className=" flex flex-col ">
          <Label htmlFor="title">E-mail</Label>
          <Input
            title="Nome"
            placeholder="Nome"
            onChange={e => setName(e.target.value)}
          />
        </div>{' '}
        <div className=" flex flex-col ">
          <Label htmlFor="title">E-mail</Label>
          <Input
            title="E-mail"
            placeholder="E-mail"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <Separator />
        <div className="flex flex-col">
          <Label htmlFor="title">Password</Label>
          <Input
            title="Password"
            placeholder="password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit">Cadastrar</Button>
      </form>
    </div>
  )
}
