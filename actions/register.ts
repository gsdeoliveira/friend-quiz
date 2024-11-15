'use server'

import * as z from 'zod'
import bcrypt from 'bcrypt'

import { db } from '@/lib/db'
import { RegisterSchema } from '@/schemas'
import { getUserByEmail } from '@/data/user'

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Campos Inválidos!' }
  }

  const { email, password, firstName, secondName, color } = validatedFields.data
  const hashedPassword = await bcrypt.hash(password, 10)

  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    return { error: 'Email já cadastrado!' }
  }

  await db.user.create({
    data: {
      firstName,
      secondName,
      color,
      email,
      password: hashedPassword,
    },
  })

  // TODO Send verification token email

  return { success: 'Usuário Criado!' }
}
