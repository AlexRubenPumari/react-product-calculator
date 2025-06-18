import { createContext } from 'react'
import { useProductForm } from '../../hooks/products/useProductForm'

export const AddProductContext = createContext()

export default function AddProductProvider({ children }) {
  const contextValue = useProductForm()
  return (
    <AddProductFormContext.Provider
      value={contextValue}>
      {children}
    </AddProductFormContext.Provider>
  )
}