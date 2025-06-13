import Modal from '../common/Modal'
import FormProduct from './FormProduct'
import Input from '../common/Input'
import { useForm } from '../../hooks/common/useForm'
import { isNumber, isDecimal } from '../../logic/common/formatters'

export default function ModalAddProduct({ onClose }) {
  const [NAME, PRICE, IMAGE] = ['name', 'price', 'image']
  const { values, errors, handleChange } = useForm(
    { [NAME]: '', [PRICE]: '', [IMAGE]: null },
    { [NAME]: isNumber, [PRICE]: isDecimal },
    { [NAME]: null }
  )
  return (
    <Modal onClose={onClose}>
      <input
        name={NAME}
        value={values[NAME]}
        onChange={handleChange}
      />
      <Input />
    </Modal>
  )
}