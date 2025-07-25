import { createContext, useContext } from 'react'
import useProducts from '../../hooks/products/useProducts'

const ProductsContext = createContext()

export default function ProductsProvider({ children }) {
  const contextValue = useProducts()

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  )
}

export function useProductsContext() {
  const context = useContext(ProductsContext)

  if (!context) {
    throw new Error('useProductsContext must be used within a ProductsProvider')
  }

  return context
}