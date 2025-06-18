import { useProductForm } from '../../hooks/products/useProductForm'
import Modal from '../common/Modal'
import FormProduct from './FormProduct'

export default function ModalAddProduct({ onClose }) {
  const { values, errors, handleChange, handleImageChange, validateForm } = useProductForm()

  const handleSubmit = e => {
    e.preventDefault()
    const hasError = validateForm()
    console.log(hasError ? 'Correcto' : 'Incorrecto')
    console.log(values)
  }
  return (
    <Modal onClose={onClose} className='Scrollbar'>
      <FormProduct
        type='add'
        values={values}
        errors={errors}
        onChange={handleChange}
        onImageChange={handleImageChange}
        onSubmit={handleSubmit}
        onCancel={onClose}
      />
    </Modal>
  )
}