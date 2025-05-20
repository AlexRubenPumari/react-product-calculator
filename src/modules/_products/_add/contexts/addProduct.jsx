import { createContext, useState } from 'react'
import { useCurrentProduct } from '../../hooks/useCurrentProduct'

export const AddProductContext = createContext()

export default function AddProductProvider({ children }) {
  const {
    product,
    setProductValueFor,
    validateCurrentProduct,
  } = useCurrentProduct()
  return (
    <AddProductContext.Provider
      value={{
        product,
        setProductValueFor,
        validateCurrentProduct,
      }}>
      {children}
    </AddProductContext.Provider>
  )
}