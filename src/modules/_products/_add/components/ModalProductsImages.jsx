import Modal from '../../components/Modal'
import ListOfProductImages from '../components/ListOfProductImages'

export default function ModalProductsImages({ onClose }) {
  return (
    <Modal className='Scrollbar overflow-y-auto' onClose={onClose}>
      <h3 className='mb-5 text-center'>Select a image:</h3>
      <ListOfProductImages />
    </Modal>
  )
}
