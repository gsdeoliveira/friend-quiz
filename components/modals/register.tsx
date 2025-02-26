'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { useCallback, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { RegisterSchema } from '@/schemas'
import { z } from 'zod'
import { FormError } from '../form-error'
import { useToast } from '@/hooks/use-toast'
import { useRegisterModal } from '@/hooks/useRegisterModal'
import { useLoginModal } from '@/hooks/useLoginModal'
import { register } from '@/actions/register'
import { Badge } from '../ui/badge'
import { CirclePicker } from 'react-color'

export const Register = () => {
  const [isPending, startTransition] = useTransition()
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()
  const { toast } = useToast()

  const openLoginModal = () => {
    registerModal.onClose()
    loginModal.onOpen()
  }

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  // Função para tratar a mudança da cor
  const handleColorChange = (color: { hex: string }) => {
    form.setValue('color', color.hex)
  }

  const onSubmit = useCallback(
    async (values: z.infer<typeof RegisterSchema>) => {
      try {
        startTransition(() => {
          register(values).then((data) => {
            if (data.success) {
              toast({
                variant: 'success',
                title: 'Seja bem-vindo de volta!',
              })
            }

            if (data.error) {
              toast({
                variant: 'destructive',
                title: data.error,
              })
            }
          })
        })
      } catch (error) {
        console.error(error)
      } finally {
        // TODO
      }
    },
    [toast],
  )

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col justify-between gap-10">
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field, fieldState }) => (
                    <FormItem className="flex-1">
                      <FormLabel htmlFor="nome" className="text-white">
                        Nome:
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          id="nome"
                          type="nome"
                          placeholder="John"
                          className="bg-zinc-800 text-white border-none focus-visible:ring-zinc-700"
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
                  name="secondName"
                  render={({ field, fieldState }) => (
                    <FormItem className="flex-1">
                      <FormLabel htmlFor="sobrenome" className="text-white">
                        Sobrenome:
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          id="sobrenome"
                          type="sobrenome"
                          placeholder="Doe"
                          className="bg-zinc-800 text-white border-none focus-visible:ring-zinc-700"
                        />
                      </FormControl>
                      {fieldState.error && (
                        <FormError message={fieldState.error?.message} />
                      )}
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel htmlFor="email" className="text-white">
                      Email:
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        id="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        className="bg-zinc-800 text-white border-none focus-visible:ring-zinc-700"
                      />
                    </FormControl>
                    {fieldState.error && (
                      <FormError message={fieldState.error?.message} />
                    )}
                  </FormItem>
                )}
              />
              <div className="flex flex-col sm:flex-row gap-3 w-full relative">
                <FormField
                  control={form.control}
                  name="color"
                  render={({ fieldState }) => (
                    <FormItem className="flex-1 space-y-2">
                      <FormLabel htmlFor="cor" className="text-white">
                        Escolha sua cor:
                      </FormLabel>
                      <FormControl>
                        <CirclePicker
                          onChangeComplete={(e) => handleColorChange(e)}
                          width="100%"
                        />
                      </FormControl>
                      {fieldState.error && (
                        <FormError
                          className="mt-32"
                          message={fieldState.error?.message}
                        />
                      )}
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full relative">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ fieldState }) => (
                    <FormItem className="flex-1">
                      <FormLabel htmlFor="cor" className="text-white">
                        Suas tags:
                      </FormLabel>
                      <FormControl>
                        <div className="space-x-1">
                          <Badge className="hover:bg-black cursor-pointer">
                            ReactJS
                          </Badge>
                          <Badge className="hover:bg-black cursor-pointer">
                            JavaScript
                          </Badge>
                          <Badge className="hover:bg-black cursor-pointer">
                            NextJS
                          </Badge>
                        </div>
                      </FormControl>
                      {fieldState.error && (
                        <FormError message={fieldState.error?.message} />
                      )}
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="password"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel htmlFor="senha" className="text-white">
                      Sua senha:
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        id="senha"
                        type="password"
                        placeholder="12345678"
                        className="bg-zinc-800 text-white border-none focus-visible:ring-zinc-700"
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
                    <FormLabel htmlFor="confirmar-senha" className="text-white">
                      Digite novamente sua senha:
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        id="confirmar-senha"
                        type="password"
                        placeholder="12345678"
                        className="bg-zinc-800 text-white border-none focus-visible:ring-zinc-700"
                      />
                    </FormControl>
                    {fieldState.error && (
                      <FormError message={fieldState.error?.message} />
                    )}
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              variant={'secondary'}
              size={'lg'}
              className="text-md"
              disabled={isPending}
            >
              Cadastrar
            </Button>
          </div>
          <p className="text-xs">
            Já possui uma conta?
            <span
              className="underline cursor-pointer"
              onClick={() => {
                openLoginModal()
              }}
            >
              {' '}
              entrar
            </span>
          </p>
        </form>
      </Form>
    </div>
  )
}
