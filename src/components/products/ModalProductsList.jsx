import { useModalContext } from '../../contexts/common/modal'
import { useProductsContext } from '../../contexts/products/products'
import { classNames } from '../../logic/common/classNames'
import Modal from '../common/Modal'
import TableOfProducts from './TableOfProducts'
import WithoutProducts from './WithoutProducts'

export default function ModalProductsList({ onClose }) {
  const { openEditProductModal } = useModalContext()
  const { products } = useProductsContext()
  const hasProducts = products?.length > 0
  const modalClass = classNames(!hasProducts && 'flex-center-all grow')

  return (
    <Modal onClose={onClose} className={modalClass}>
      {
        hasProducts
          ? (
            <>
              <p>Select a product to edit:</p>
              <TableOfProducts
                products={products}
                onRowClick={product => openEditProductModal(product)}
              />
            </>
          )
          : <WithoutProducts />
      }
    </Modal>
  )
}