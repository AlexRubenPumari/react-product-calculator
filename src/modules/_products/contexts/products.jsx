import { createContext } from 'react'
import useProducts from '../hooks/useProducts'

export const ProductsContext = createContext()

export default function ProductsProvider({ children }) {
  const {
    products,
    filteredProducts,
    increaseProductCount,
    decreaseProductCount,
  } = useProducts()

  return (
    <ProductsContext.Provider
      value={{
        products,
        filteredProducts,
        increaseProductCount,
        decreaseProductCount,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}