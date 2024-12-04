import { useLoginModal } from '@/hooks/useLoginModal';
import { Modal } from '../modal';
import { useRegisterModal } from '@/hooks/useRegisterModal';
import { Register } from './register';
import { Login } from './login';

export const LoginRegister = () => {
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()

  const login = (
    <div>Login</div>
  )

  const register = (
    <div>Register</div>
  )

  const footer = (
    <div onClick={() => {
      loginModal.onClose()
      registerModal.onOpen()
    }}>trocar</div>
  )

  const openLoginModal = () => {
    registerModal.onClose()
    loginModal.onOpen()
  }

  const openRegisterModal = () => {
    loginModal.onClose()
    registerModal.onOpen()
  }

  if(loginModal.isOpen) {
    return (
      <div>
        <Modal title='Entre na sua conta' onClose={() => loginModal.onClose} body={<Login />}></Modal>
      </div>
    )
  }

  if(registerModal.isOpen) {
    return (
      <div>
        <Modal title='Cadastre-se' onClose={() => {}} body={<Register />}></Modal>
      </div>
    )
  }

};
