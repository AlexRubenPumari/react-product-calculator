import { useModalContext } from '../../hooks/common/useModalContext'
import ModalAddProduct from '../products/ModalAddProduct'
import { MODAL as M } from '../../config/constants'

export default function ModalController () {
  const { modal, closeModal } = useModalContext()
  const onClose = () => closeModal()
  if (modal === M.ADD_PRODUCT) {
    return <ModalAddProduct onClose={onClose} />
  }
}