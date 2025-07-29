import { useProductsContext } from '../../contexts/products/products'
import { classNames } from '../../logic/common/classNames'
import Modal from '../common/Modal'
import ProductsTableContent from './ProductsTableContent'

export default function ModalToDeleteProduct({ onClose }) {
  const { products } = useProductsContext()
  const hasProducts = products?.length > 0
  const modalClass = classNames(!hasProducts && 'flex-center-all grow')

  return (
    <Modal onClose={onClose} className={modalClass}>
      <ProductsTableContent
        products={products}
        message='Select a product to delete:'
        onRowClick={console.log}
      />
    </Modal>
  )
}