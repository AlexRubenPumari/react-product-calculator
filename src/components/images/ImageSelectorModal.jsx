import ListOfProductImages from './ListOfProductImages'
import Modal from '../common/Modal'
import ButtonPrimary from '../common/ButtonPrimary'

export default function ImageSelectorModal ({ onImageSelect, onClose }) {
  return (
    <Modal className='flex flex-col items-center gap-4 px-2' onClose={onClose}>
      <p className='w-full text-left font-semibold'>Select an image:</p>
      <ListOfProductImages onImageClick={onImageSelect} />
      <ButtonPrimary type='button' className='w-24' onClick={onClose}>
        Cancel
      </ButtonPrimary>
    </Modal>
  )
}