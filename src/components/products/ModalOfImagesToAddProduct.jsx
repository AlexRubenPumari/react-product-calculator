import { useContext } from 'react'
import Modal from '../../components/Modal'
import ListOfProductImages from '../../components/ListOfProductImages'
import { AddProductContext } from '../../contexts/addProduct'

export default function ModalOfImagesToAddProduct ({ onClose }) {
  const { setProductValueFor } = useContext(AddProductContext)
  
  return (
    <Modal className='Scrollbar overflow-y-auto' onClose={onClose}>
      <h3 className='mb-5 text-center'>Select a image:</h3>
      <ListOfProductImages
        onImageClick={ value => (setProductValueFor('img', value), onClose()) }
      />
    </Modal>
  )
}