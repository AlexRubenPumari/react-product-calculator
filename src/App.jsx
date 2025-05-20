import ProductsProvider from './modules/_products/contexts/products'
import Header from './components/Header'
import PageIndex from './modules/_products/_index/PageIndex'
import PageAddProduct from './modules/_products/_add/PageAddProduct'
import { useContext } from 'react'
import { PageContext } from './contexts/page'
import { PAGES } from './config/constants'
import AddProductProvider from './modules/_products/_add/contexts/addProduct'

export default function App () {
  const { page } = useContext(PageContext)

  return (
    <ProductsProvider>
      <Header />
      {page === PAGES.INDEX && <PageIndex /> }
      {page === PAGES.ADD_PRODUCT && (
        <AddProductProvider><PageAddProduct /></AddProductProvider>
      )}
    </ProductsProvider>
  )
}