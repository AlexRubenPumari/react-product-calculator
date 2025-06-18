import { useModalContext } from '../../hooks/common/useModalContext'
import { MODAL as M } from '../../config/constants'
import ModalAddProduct from '../products/ModalAddProduct'

export default function ModalController () {
  const { modal, closeModal } = useModalContext()
  const onClose = () => closeModal()
  if (modal === M.ADD_PRODUCT) return <ModalAddProduct onClose={onClose} />
}