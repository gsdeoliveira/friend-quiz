'use client'
import { useLoginModal } from '@/hooks/useLoginModal'
import { useState, useCallback } from 'react'
import { Modal } from '../modal'
import { useRegisterModal } from '@/hooks/useRegisterModal'

export const LoginModal = () => {
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true)

      loginModal.onClose()
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }, [loginModal])

  const onToggle = useCallback(() => {
    if (isLoading) return

    loginModal.onClose()
    registerModal.onOpen()
  }, [isLoading, registerModal, loginModal])

  const bodyContent = <div className="flex flex-col gap-4">Login Modal</div>

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
