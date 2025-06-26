import { useContext } from 'react'
import { ProductsContext } from '../../contexts/products/products'
import { useProductForm } from '../../hooks/products/useProductForm'
import Modal from '../common/Modal'
import FormProduct from './FormProduct'

export default function ModalAddProduct({ onClose }) {
  const { addNewProduct } = useContext(ProductsContext)
  const { values, errors, handleChange, handleImageChange, validateForm } = useProductForm()

  const handleSubmit = e => {
    e.preventDefault()
    
    const hasError = !validateForm()
    if (hasError) return
    console.log(values)
    addNewProduct(values)
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