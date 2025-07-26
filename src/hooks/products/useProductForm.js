import { useForm } from '../common/useForm'
import { PRODUCT_KEYS } from '../../config/constants'
import { isDecimal } from '../../logic/common/validations'
import { isValidProductName, isValidProductPrice, isValidProductImg } from '../../logic/products/validations'

export function useProductForm(initialProduct) {
  const [NAME, PRICE, IMAGE] = PRODUCT_KEYS
  const initialValues = initialProduct ?? { [NAME]: '', [PRICE]: '', [IMAGE]: null }
  const { values, errors, handleChange, validateForm, setValues, setErrors } = useForm(
    initialValues,
    { [PRICE]: isDecimal },
    { [NAME]: isValidProductName, [PRICE]: isValidProductPrice, [IMAGE]: isValidProductImg }
  )
  const handleImageChange = e => {
    setValues(prevValues => ({ ...prevValues, [IMAGE]: e }))
    setErrors(prevErrors => ({ ...prevErrors, [IMAGE]: null }))
  }

  const resetForm = () => {
    setValues(prevValues => {
      let newValues = {}
      for (const fieldName in prevValues) {
        newValues[fieldName] = ''
      }
      newValues.img = null

      return newValues
    })
    setErrors({})
  }

  return {
    values, errors,
    handleChange, handleImageChange,
    isValidForm: validateForm, resetForm
  }
}
