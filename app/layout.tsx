import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { LoginModal } from '@/components/modals/login-modal'
import { RegisterModal } from '@/components/modals/register-model'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Quiz',
  description: 'Quiz',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn('bg-zinc-800', poppins.className)}>
        <LoginModal />
        <RegisterModal />
        {children}
      </body>
    </html>
  )
}
