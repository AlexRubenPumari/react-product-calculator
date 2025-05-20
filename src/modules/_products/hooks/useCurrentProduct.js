import { useState } from 'react'
import { getProductWithErrors } from '../logic/forms'

export function useCurrentProduct() {
  const [product, setProduct] = useState({
    name: { value: '', error: null },
    price: { value: '', error: null },
    img: { value: null, error: null },
  })
  const setProductValueFor = (key, value) => {
    const newProduct = structuredClone(product)
    newProduct[key].value = value
    newProduct[key].error = null

    setProduct(newProduct)
  }
  const setProductErrorFor = (key, error) => {
    const newProduct = structuredClone(product)
    newProduct[key].error = error

    setProduct(newProduct)
  }
  const validateCurrentProduct = () => {
    const productWithErrors = getProductWithErrors(structuredClone(product))
    if (productWithErrors) setProduct(productWithErrors)

    return productWithErrors ? true : false
  }

  return {
    product,
    setProductValueFor,
    setProductErrorFor,
    validateCurrentProduct,
  }
}
