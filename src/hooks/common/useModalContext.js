import { useContext } from 'react'
import { ModalContext } from '../../contexts/common/modal'

export function useModalContext () {
  const { modal, closeModal } = useContext(ModalContext)

  return { modal, closeModal }
}