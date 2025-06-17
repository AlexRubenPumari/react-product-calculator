import { useForm } from '../common/useForm'
import { PRODUCT_KEYS } from '../../config/constants'
import { isValidProductName, isValidProductPrice, isValidProductImg } from '../../logic/products/validations'
import { isDecimal } from '../../logic/common/validations'

export function useProductForm() {
  const [NAME, PRICE, IMAGE] = PRODUCT_KEYS
  const { values, errors, handleChange, validateForm } = useForm(
    { [NAME]: '', [PRICE]: '', [IMAGE]: null },
    { [PRICE]: isDecimal },
    { [NAME]: isValidProductName, [PRICE]: isValidProductPrice, [IMAGE]: isValidProductImg }
  )

  return { values, errors, handleChange, validateForm }
}
