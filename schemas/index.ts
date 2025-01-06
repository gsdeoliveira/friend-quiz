import * as z from 'zod'

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email é obrigatório',
  }),
  password: z.string().min(1, {
    message: 'Senha é obrigatório',
  }),
})

export const RegisterSchema = z.object({
  email: z.string().email({
    message: 'Email é obrigatório',
  }),
  password: z.string().min(6, {
    message: 'Senha deve ter no mínimo 6 caracteres',
  }),
  firstName: z.string({ message: 'Nome é obrigatório' }).min(1, {
    message: 'Nome é obrigatório',
  }),
  secondName: z.string({ message: 'Sobrenome é obrigatório' }).min(1, {
    message: 'Sobrenome é obrigatório',
  }),
  color: z.string({ message: 'Cor é obrigatório' }).min(1, {
    message: 'Cor é obrigatório',
  }),
})
