import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'
import { Separator } from '../../components/ui/separator'

export function SingIn() {
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="flex flex-col gap-6">
        <div className=" flex flex-col">
          <Label htmlFor="title">E-mail</Label>
          <Input title="E-mail" placeholder="E-mail" />
        </div>
        <Separator />
        <div className="flex flex-col">
          <Label htmlFor="title">Password</Label>
          <Input title="Password" placeholder="password" />
        </div>
      </form>
    </div>
  )
}
