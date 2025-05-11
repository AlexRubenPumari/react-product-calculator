import ProductsProvider from './modules/_products/contexts/products'
import Header from './components/Header'
import ProductsIndex from './modules/_products/_index/ProductsIndex'
import ProductsAdd from './modules/_products/_add/ProductsAdd'
import { useContext } from 'react'
import { PageContext } from './contexts/page'
import { PAGES } from './config/constants'

export default function App () {
  const { page } = useContext(PageContext)

  return (
    <ProductsProvider>
      <Header />
      { page === PAGES.INDEX && <ProductsIndex /> }
      { page === PAGES.ADD_PRODUCT && <ProductsAdd /> }
    </ProductsProvider>
  )
}