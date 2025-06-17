import { useForm } from '../common/useForm'
import { PRODUCT_KEYS } from '../../config/constants'
import { isDecimal } from '../../logic/common/validations'
import { isValidProductName, isValidProductPrice, isValidProductImg } from '../../logic/products/validations'

export function useProductForm() {
  const [NAME, PRICE, IMAGE] = PRODUCT_KEYS
  const { values, errors, handleChange, validateForm, setValues, setErrors } = useForm(
    { [NAME]: '', [PRICE]: '', [IMAGE]: null },
    { [PRICE]: isDecimal },
    { [NAME]: isValidProductName, [PRICE]: isValidProductPrice, [IMAGE]: isValidProductImg }
  )
  const handleImageChange = e => {
    setValues(prevValues => ({ ...prevValues, [IMAGE]: e }))
    setErrors(prevErrors => ({ ...prevErrors, [IMAGE]: null }))
  }

  return { values, errors, handleChange, handleImageChange, validateForm }
}
