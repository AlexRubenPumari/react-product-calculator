import { useModalContext } from '../../contexts/common/modal'
import Modal from '../common/Modal'
import TableOfProducts from './TableOfProducts'

export default function ModalProductsList ({ onClose }) {
  const { openEditProductModal } = useModalContext()

  return (
    <Modal onClose={onClose}>
      <p>Select a product to edit:</p>
      <TableOfProducts onRowClick={product => openEditProductModal(product)} />
    </Modal>
  )
}