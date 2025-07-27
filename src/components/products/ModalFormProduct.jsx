import { useNotification } from '../../hooks/common/useNotification'
import { useProductForm } from '../../hooks/products/useProductForm'
import Notification from '../common/Notification'
import Modal from '../common/Modal'
import FormProduct from './FormProduct'
import { classNames } from '../../logic/common/classNames'

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
  const notificationClass = classNames(
    'text-center', notification ? 'visible' : 'invisible'
  )
  
  return (
    <Modal onClose={onClose} className='Scrollbar'>
      <FormProduct
        type={isEditing ? 'Edit' : 'Add'}
        values={values}
        errors={errors}
        onChange={handleChange}
        onImageChange={handleImageChange}
        onSubmit={handleSubmit}
        onCancel={onClose}
      >
        <Notification type={notification?.type} className={notificationClass}>
          {notification?.message || 'fallback'}
        </Notification>
      </FormProduct>
    </Modal>
  )
}