import IndexPage from './components/common/IndexPage'
import ProductsProvider from './contexts/products/products'
import PageProvider from './contexts/common/page'

export default function App() {
  return (
    <ProductsProvider>
      <PageProvider>
        <IndexPage />
      </PageProvider>
    </ProductsProvider>
  )
}