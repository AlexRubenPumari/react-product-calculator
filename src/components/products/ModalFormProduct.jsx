import { useNotification } from '../../hooks/common/useNotification'
import { useProductForm } from '../../hooks/products/useProductForm'
import Notification from '../common/Notification'
import Modal from '../common/Modal'
import FormProduct from './FormProduct'

export default function ModalFormProduct({ initialProduct, onClose, onSubmit }) {
  const isEditing = Boolean(initialProduct)
  const { values, errors, handleChange, handleImageChange, isValidForm, resetForm } = useProductForm(initialProduct)
  const { notification, setNotification } = useNotification(3000)

  const handleSubmit = e => {
    e.preventDefault()
    if (!isValidForm()) return

    onSubmit(values)
      .then(() => {
        !isEditing && resetForm()
        setNotification(
          {
            type: 'success',
            message: `Product ${isEditing ? 'updated': 'added'} successfully`,
          }
        )
      })
      .catch(() => setNotification(
        {
          type: 'error',
          message: `Failed to ${isEditing ? 'update' : 'add'} product`
        }
      ))
  }
  return (
    <Modal onClose={onClose} className='Scrollbar relative'>
      <FormProduct
        type={isEditing ? 'Edit' : 'Add'}
        values={values}
        errors={errors}
        onChange={handleChange}
        onImageChange={handleImageChange}
        onSubmit={handleSubmit}
        onCancel={onClose}
      />
      {notification && (
        <Notification type={notification.type} className='absolute -bottom-28 left-4'>
          {notification.message}
        </Notification>
      )}
    </Modal>
  )
}