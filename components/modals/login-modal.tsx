'use client'
import * as z from 'zod'
import { useLoginModal } from '@/hooks/useLoginModal'
import { useState, useCallback, useTransition } from 'react'
import { Modal } from '../modal'
import { useRegisterModal } from '@/hooks/useRegisterModal'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema } from '@/schemas'
import { useForm } from 'react-hook-form'
import { login } from '@/actions/login'

export const LoginModal = () => {
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()

  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = useCallback(
    async (values: z.infer<typeof LoginSchema>) => {
      try {
        setError('')
        setSuccess('')
        setIsLoading(true)

        startTransition(() => {
          login(values).then((data) => {
            setError(data.error)
            setSuccess(data.success)
          })
        })

        loginModal.onClose()
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    },
    [loginModal],
  )

  const onToggle = useCallback(() => {
    if (isLoading) return

    loginModal.onClose()
    registerModal.onOpen()
  }, [isLoading, registerModal, loginModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="text-white">
          Email:
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          className="bg-zinc-900 text-white border-none"
        />
      </div>
      <div>
        <Label htmlFor="senha" className="text-white">
          Senha:
        </Label>
        <Input
          id="senha"
          type="password"
          placeholder="Senha"
          className="bg-zinc-900 text-white border-none"
        />
      </div>
    </div>
  )

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        Ainda não possui uma conta?
        <span
          onClick={onToggle}
          className="text-white cursor-pointer hover:underline"
        >
          {' '}
          cadastre-se
        </span>
      </p>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Entrar"
      actionLabel="Entrar"
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  )
}
