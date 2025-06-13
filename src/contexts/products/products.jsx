import { createContext } from 'react'
import useProducts from '../../hooks/products/useProducts'

export const ProductsContext = createContext()

export default function ProductsProvider({ children }) {
  const contextValue = useProducts()

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  )
}