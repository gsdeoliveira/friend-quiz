'use client'
import { useRegisterModal } from '@/hooks/useRegisterModal'
import { Modal } from '../modal'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { FaPlus } from 'react-icons/fa'
import { IoIosClose } from 'react-icons/io'

export const RegisterModal = () => {
  const registerModal = useRegisterModal()

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3">
        <div className="flex flex-col gap-2 flex-1">
          <Label htmlFor="nome" className="text-white">
            Nome:
          </Label>
          <Input
            id="nome"
            type="text"
            placeholder="Nome"
            className="text-white bg-zinc-900 border-none"
          />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <Label htmlFor="sobrenome" className="text-white">
            Sobrenome:
          </Label>
          <Input
            id="sobrenome"
            type="text"
            placeholder="Sobrenome"
            className="text-white bg-zinc-900 border-none"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <Label htmlFor="email" className="text-white">
          Email:
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          className="text-white bg-zinc-900 border-none"
        />
      </div>
      <div className="flex gap-3">
        <div className="flex flex-col gap-2 flex-1">
          <Label htmlFor="color" className="text-white">
            Escolha sua cor:
          </Label>
          <div className="w-10 h-10 rounded-full bg-white" />
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <Label htmlFor="color" className="text-white">
            Suas Tags:
          </Label>
          <div className="grid grid-cols-3 items-center gap-2">
            <div className="flex justify-between items-center gap-2 px-2 py-1 rounded-md bg-zinc-900 text-white text-xs">
              <span>React JS</span>
              <IoIosClose className="w-7 h-7 cursor-pointer" />
            </div>
            <Button
              variant={'secondary'}
              asChild
              className="text-xs w-fit p-2 cursor-pointer"
            >
              <FaPlus className="w-7 h-7" />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <Label htmlFor="senha" className="text-white">
          Senha:
        </Label>
        <Input
          id="senha"
          type="password"
          placeholder="Sua senha"
          className="text-white bg-zinc-900 border-none"
        />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <Label htmlFor="senha-confirmation" className="text-white">
          Confirme sua senha:
        </Label>
        <Input
          id="senha-confirmation"
          type="password"
          placeholder="Digite novamente sua senha"
          className="text-white bg-zinc-900 border-none"
        />
      </div>
    </div>
  )

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        Já possui uma conta?
        <span
          onClick={() => {}}
          className="text-white cursor-pointer hover:underline"
        >
          {' '}
          entrar
        </span>
      </p>
    </div>
  )

  return (
    <Modal
      disabled={false}
      isOpen={registerModal.isOpen}
      title="Cadastre-se"
      onClose={registerModal.onClose}
      body={bodyContent}
      footer={footerContent}
    />
  )
}
