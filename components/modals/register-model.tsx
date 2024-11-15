'use client'
import { useRegisterModal } from '@/hooks/useRegisterModal'
import { useState, useCallback } from 'react'
import { Modal } from '../modal'
import { useLoginModal } from '@/hooks/useLoginModal'

export const RegisterModal = () => {
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true)

      registerModal.onClose()
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }, [registerModal])

  const onToggle = useCallback(() => {
    if (isLoading) return

    registerModal.onClose()
    loginModal.onOpen()
  }, [isLoading, registerModal, loginModal])

  const bodyContent = <div className="flex flex-col gap-4">Login Modal</div>

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        Já possui uma conta?
        <span
          onClick={onToggle}
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
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Cadastre-se"
      actionLabel="Cadastrar"
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  )
}
