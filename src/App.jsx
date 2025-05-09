import ProductsProvider from './contexts/products'
import Header from './components/layout/Header'
import Main from './components/layout/Main'
import Footer from './components/layout/Footer'

export default function App () {
  return (
    <ProductsProvider>
      <Header />
      <Main />
      <Footer />
    </ProductsProvider>
  )
}