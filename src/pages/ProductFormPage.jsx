import { useNotification } from '../hooks/common/useNotification'
import { useProductForm } from '../hooks/products/useProductForm'
import Notification from '../components/common/Notification'
import FormProduct from '../components/products/FormProduct'

export default function ProductFormPage({ initialProduct, onGoBack, onSubmit }) {
  const isEditMode = Boolean(initialProduct)
  const { values, errors, handleChange, handleImageChange, validateForm, resetForm } = useProductForm(initialProduct)
  const { notification, setSuccess, setError } = useNotification(3000)

  const handleSubmit = e => {
    e.preventDefault()
    if (!validateForm()) return

    onSubmit(values)
      .then(() => {
        if (!isEditMode) resetForm()
        setSuccess(`Product ${isEditMode ? 'updated' : 'added'} successfully`)
      })
      .catch(() => setError(`Failed to ${isEditMode ? 'update' : 'add'} product`))
  }

  return (
    <main className='flex-grow py-9 Scrollbar'>
        <h2 className='font-bold text-center mb-4'>
          {`${isEditMode ? 'EDIT' : 'ADD'} PRODUCT`}
        </h2>
        <FormProduct
          className='max-w-96 mx-auto px-4'
          type={isEditMode ? 'Edit' : 'Add'}
          values={values}
          errors={errors}
          onChange={handleChange}
          onImageChange={handleImageChange}
          onSubmit={handleSubmit}
          onCancel={onGoBack}
        >
          <Notification
            type={notification?.type}
            className='text-center'
            message={notification?.message}
          />
        </FormProduct>
    </main>
  )
}