import Modal from '../common/Modal'
import TableOfProducts from './TableOfProducts'

export default function ModalProductsList ({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <p>Select a product to edit:</p>
      <TableOfProducts onRowClick={e => console.log(e.name)} />
    </Modal>
  )
}