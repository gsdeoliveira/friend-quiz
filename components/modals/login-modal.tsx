'use client'
import * as z from 'zod'
import { useLoginModal } from '@/hooks/useLoginModal'
import { useState, useCallback, useTransition } from 'react'
import { Modal } from '../modal'
import { useRegisterModal } from '@/hooks/useRegisterModal'
import { Input } from '../ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema } from '@/schemas'
import { useForm } from 'react-hook-form'
import { login } from '@/actions/login'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { FormError } from '../form-error'
import { FormSuccess } from '../form-success'
import { Button } from '../ui/button'

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

  const onSubmit = useCallback(async (values: z.infer<typeof LoginSchema>) => {
    try {
      setError('')
      setSuccess('')
      setIsLoading(true)
      console.log('values', values)

      startTransition(() => {
        login(values).then((data) => {
          console.log('data', values)
          setError(data.error)
          setSuccess(data.success)
        })
      })
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  console.log('Erros do formulário:', form.formState.errors)

  const onToggle = useCallback(() => {
    if (isLoading) return

    loginModal.onClose()
    registerModal.onOpen()
  }, [isLoading, registerModal, loginModal])

  const bodyContent = (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col justify-between gap-10">
          <div className="space-y-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="text-white">Email:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      className="bg-zinc-900 text-white border-none"
                    />
                  </FormControl>
                  {fieldState.error && (
                    <FormError message={fieldState.error?.message} />
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel className="text-white">Senha:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      id="senha"
                      type="password"
                      placeholder="12345678"
                      className="bg-zinc-900 text-white border-none"
                    />
                  </FormControl>
                  {fieldState.error && (
                    <FormError message={fieldState.error?.message} />
                  )}
                </FormItem>
              )}
            />
            <FormError message={error} />
            <FormSuccess message={success} />
          </div>
          <Button
            type="submit"
            variant={'secondary'}
            size={'lg'}
            className="text-lg"
            disabled={isPending}
          >
            Entrar
          </Button>
        </div>
      </form>
    </Form>
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
      onClose={loginModal.onClose}
      body={bodyContent}
      footer={footerContent}
    />
  )
}
