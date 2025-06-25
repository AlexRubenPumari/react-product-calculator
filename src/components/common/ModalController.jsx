import { useModalContext } from '../../hooks/common/useModalContext'
import { MODAL as M } from '../../config/constants'
import ModalAddProduct from '../products/ModalAddProduct'
import ModalEditProduct from '../products/ModalEditProduct'

export default function ModalController () {
  const { modal, closeModal } = useModalContext()
  const onClose = () => closeModal()
  if (modal === M.ADD_PRODUCT) return <ModalAddProduct onClose={onClose} />
  if (modal === M.EDIT_PRODUCT) return <ModalEditProduct onClose={onClose} />
}