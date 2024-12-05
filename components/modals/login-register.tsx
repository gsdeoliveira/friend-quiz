import { useLoginModal } from '@/hooks/useLoginModal'
import { Modal } from '../modal'
import { useRegisterModal } from '@/hooks/useRegisterModal'
import { Register } from './register'
import { Login } from './login'

export const LoginRegister = () => {
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()

  if (loginModal.isOpen) {
    return (
      <div>
        <Modal
          title="Entre na sua conta"
          onClose={() => loginModal.onClose}
          body={<Login />}
        ></Modal>
      </div>
    )
  }

  if (registerModal.isOpen) {
    return (
      <div>
        <Modal
          title="Cadastre-se"
          onClose={() => {}}
          body={<Register />}
        ></Modal>
      </div>
    )
  }
}
