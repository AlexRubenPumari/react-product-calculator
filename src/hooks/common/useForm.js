import { useState, useCallback } from 'react'

export function useForm (initialValues, keyloggers, validations) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isValid, setIsValid] = useState(false)

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    const lastChar = value.slice(-1)
    if (keyloggers[name] && !keyloggers[name]?.(lastChar)) return

    setValues(prevValues => ({ ...prevValues, [name]: value }))
  }, [])

  // Función para validar todo el formulario
  const validateForm = useCallback(() => {
    let newErrors = {};
    let formIsValid = true;

    for (const fieldName in validations) {
      const validate = validations[fieldName];
      const value = values[fieldName];
      const error = validate(value, values); // Pasa `values` por si la validación depende de otros campos

      if (error) {
        newErrors[fieldName] = error;
        formIsValid = false;
      }
    }

    setErrors(newErrors);
    setIsValid(formIsValid);
    return formIsValid;
  }, [values, validations]);


  return {
    values,
    errors,
    handleChange,
    validateForm,
    isValid,
  }
}