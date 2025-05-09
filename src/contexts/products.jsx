import { createContext } from 'react'
import useProducts from '../hooks/useProduct'

export const ProductsContext = createContext()

export default function ProductsProvider({ children }) {
  const { products, total, increaseProductCount, decreaseProductCount } =
    useProducts()

  return (
    <ProductsContext.Provider
      value={{ products, total, increaseProductCount, decreaseProductCount }}>
      { children }
    </ProductsContext.Provider>
  )
}
