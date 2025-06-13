import Modal from '../common/Modal'
import FormProduct from './FormProduct'
import ButtonPrimary from '../common/ButtonPrimary'
import ProductImage from './ProductImage'
import FileSelector from '../common/FileSelector'
import Input from '../common/Input'
import { useForm } from '../../hooks/common/useForm'
import { isDecimal } from '../../logic/common/validations'
import { isValidProductName, isValidProductPrice, isValidProductImg } from '../../logic/products/validations'

export default function ModalAddProduct({ onClose }) {
  const [NAME, PRICE, IMAGE] = ['name', 'price', 'img']
  const { values, errors, handleChange } = useForm(
    { [NAME]: '', [PRICE]: '', [IMAGE]: null },
    { [PRICE]: isDecimal },
    { [NAME]: null }
  )
  const handleSubmit = e => {
    e.preventDefault()
    console.log(values) }
  return (
    <Modal onClose={onClose} className='Scrollbar'>
      <form
        className='flex flex-col px-2'
        onSubmit={handleSubmit}
      >
        <Input
          label='Name'
          name={NAME}
          placeholder='Cotton T-shirt'
          value={values[NAME]}
          onChange={handleChange}
        />
        <Input
          label='Price'
          name={PRICE}
          placeholder='12.99'
          value={values[PRICE]}
          onChange={handleChange}
        />
        <FileSelector
          label='Image'
          className='mb-4'
          value={values[IMAGE]}
          error={null}
          onFocus={null}
        >
          <ProductImage />
        </FileSelector>
        <ButtonPrimary>Add</ButtonPrimary>
      </form>
    </Modal>
  )
}