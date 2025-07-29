import { useNotification } from '../hooks/common/useNotification'
import { useProductForm } from '../hooks/products/useProductForm'
import { classNames } from '../logic/common/classNames'
import Notification from '../components/common/Notification'
import FormProduct from '../components/products/FormProduct'

export default function ProductFormPage({ initialProduct, onGoHome, onSubmit }) {
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
            message: `Product ${isEditing ? 'updated' : 'added'} successfully`,
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
    <main className='flex-grow py-9 Scrollbar'>
        <h2 className='font-bold text-center mb-4'>
          {`${isEditing ? 'EDIT' : 'ADD'} PRODUCT`}
        </h2>
        <FormProduct
          className='max-w-96 mx-auto px-4'
          type={isEditing ? 'Edit' : 'Add'}
          values={values}
          errors={errors}
          onChange={handleChange}
          onImageChange={handleImageChange}
          onSubmit={handleSubmit}
          onCancel={onGoHome}
        >
          <Notification type={notification?.type} className={notificationClass}>
            {notification?.message || 'fallback text'}
          </Notification>
        </FormProduct>
    </main>
  )
}