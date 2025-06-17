import { useState, useCallback } from 'react'

export function useForm (initialValues, keyloggers, validations) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    const lastChar = value.slice(-1)
    if (keyloggers[name] && !keyloggers[name]?.(lastChar)) return

    setValues(prevValues => ({ ...prevValues, [name]: value }))
    setErrors(prevErrors => ({ ...prevErrors, [name]: null }))
  }, [])

  const validateForm = useCallback(() => {
    let newErrors = {}
    let formIsValid = true

    for (const fieldName in validations) {
      const validate = validations[fieldName]
      const value = values[fieldName]
      const error = validate(value)

      if (error) {
        newErrors[fieldName] = error
        formIsValid = false
      }
    }

    setErrors(newErrors)
    return formIsValid
  }, [values, validations])


  return {
    values,
    errors,
    handleChange,
    validateForm,
    setValues,
    setErrors,
  }
}