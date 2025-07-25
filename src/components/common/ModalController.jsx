import { useProductsContext } from '../../contexts/products/products'
import { useModalContext } from '../../contexts/common/modal'
import { MODAL } from '../../config/constants'
import ModalProductsList from '../products/ModalProductsList'
import ModalFormProduct from '../products/ModalFormProduct'

const { ADD_PRODUCT, EDIT_PRODUCT, PRODUCTS_LIST_TO_EDIT } = MODAL

export default function ModalController () {
  const { modal, closeModal } = useModalContext()
  const { addNewProduct, editProduct } = useProductsContext()
  if (!modal) return null
  
  if (modal.type === ADD_PRODUCT) {
    return (
      <ModalFormProduct onClose={closeModal} onSubmit={addNewProduct} />
    )
  }
  if (modal.type === EDIT_PRODUCT) {
    return (
      <ModalFormProduct initialProduct={modal.value} onSubmit={editProduct} onClose={closeModal} />
    )
  }
  if (modal.type === PRODUCTS_LIST_TO_EDIT) {
    return (
      <ModalProductsList onClose={closeModal} />
    )
  }
}