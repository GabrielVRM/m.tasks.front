import { Plus } from 'lucide-react'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import illustration from '../assets/ilustration.svg'
import logo from '../../public/favicon.svg'

export function EmptyGoals() {
  // function handleSubmit() {
  //   navigate('/creategoals')
  // }
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <div className="flex items-center m-0">
        <img className="w-20" src={logo} alt="logo-aplication" />
        <h1>ma.task</h1>
      </div>
      <img src={illustration} alt="illustrations-page" />
      <p className="text-zinc-400 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta que tal cadastrar agora mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  )
}
