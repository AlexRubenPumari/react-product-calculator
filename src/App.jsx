import ProductsProvider from './modules/products/contexts/products'
import Header from './components/Header'
import ProductsIndex from './modules/products/_index/ProductsIndex'
import ProductsAdd from './modules/products/_add/ProductsAdd'
import { useState } from 'react'

export default function App () {
  const [page] = useState(1)
  return (
    <ProductsProvider>
      <Header />
      { page === 1 && <ProductsIndex /> }
      { page === 2 && <ProductsAdd /> }
    </ProductsProvider>
  )
}