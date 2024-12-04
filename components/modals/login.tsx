'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { useCallback, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema } from '@/schemas'
import { z } from 'zod'
import { login } from '@/actions/login'
import { FormError } from '../form-error'
import { useToast } from '@/hooks/use-toast'
import { useRegisterModal } from '@/hooks/useRegisterModal'
import { useLoginModal } from '@/hooks/useLoginModal'

export const Login = () => {
const [isPending, startTransition] = useTransition()
const loginModal = useLoginModal()
const registerModal = useRegisterModal()
const { toast } = useToast()

const openRegisterModal = () => {
  loginModal.onClose()
  registerModal.onOpen()
}

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
startTransition(() => {
login(values).then((data) => {
if (data.success) {
  toast({
    variant: 'success',
    title: 'Seja bem-vindo de volta!',
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
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel htmlFor='email' className="text-white">Email:</FormLabel>
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
          <FormField
            control={form.control}
            name="password"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel htmlFor='senha' className="text-white">Senha:</FormLabel>
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
        </div>
        <Button
          type="submit"
          variant={'secondary'}
          size={'lg'}
          className="text-md"
          disabled={isPending}
        >
          Entrar
        </Button>
      </div>
      <p className="text-xs">Não possui uma conta?
        <span className='underline cursor-pointer' onClick={() => {openRegisterModal()}}> cadastre-se</span>
      </p>
    </form>
  </Form>
  </div>
)
}
