import PageProvider from './contexts/common/page'
import ProductsProvider from './contexts/products/products'
import Header from './components/common/Header'
import PageController from './components/common/PageController'

export default function App() {
  return (
    <ProductsProvider>
      <PageProvider>
        <Header />
        <PageController />
      </PageProvider>
    </ProductsProvider>
  )
}
