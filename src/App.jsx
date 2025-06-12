import IndexPage from './components/common/IndexPage'
import ProductsProvider from './contexts/products/products'
import ModalProvider from './contexts/common/modal'

export default function App() {
  return (
    <ProductsProvider>
      <ModalProvider>
        <IndexPage />
      </ModalProvider>
    </ProductsProvider>
  )
}