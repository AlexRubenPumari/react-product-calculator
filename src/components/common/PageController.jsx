import { useProductsContext } from '../../contexts/products/products'
import { usePageContext } from '../../contexts/common/page'
import { PAGES } from '../../config/constants'
import IndexPage from '../../pages/IndexPage'
import ProductFormPage from '../../pages/ProductFormPage'
import ProductsListPage from '../products/ProductsListPage'

const { INDEX, ADD_PRODUCT, EDIT_PRODUCT, PRODUCTS_LIST_TO_EDIT, PRODUCTS_LIST_TO_DELETE } = PAGES

export default function PageController () {
  const { page, goIndex } = usePageContext()
  const { addNewProduct, editProduct } = useProductsContext()
  if (page.type === INDEX) {
    return <IndexPage />
  }
  if (page.type === ADD_PRODUCT) {
    return <ProductFormPage onGoHome={goIndex} onSubmit={addNewProduct} />
  }
  if (page.type === EDIT_PRODUCT) {
    return <ProductFormPage onGoHome={goIndex} initialProduct={page.value} onSubmit={editProduct} />
  }
  if (page.type === PRODUCTS_LIST_TO_EDIT) {
    return <ProductsListPage onGoHome={goIndex} />
  }
  if (page.type === PRODUCTS_LIST_TO_DELETE) return <IndexPage />
}