import { createContext, useState } from 'react'
import { useCurrentProduct } from '../../hooks/useCurrentProduct'

export const AddProductContext = createContext()

export default function AddProductProvider({ children }) {
  const {
    product,
    setProductValueFor,
    setProductErrorFor,
    validateCurrentProduct,
  } = useCurrentProduct()
  return (
    <AddProductContext.Provider
      value={{
        product,
        setProductValueFor,
        setProductErrorFor,
        validateCurrentProduct,
      }}>
      {children}
    </AddProductContext.Provider>
  )
}
