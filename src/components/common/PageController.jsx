import { useProductsContext } from '../../contexts/products/products'
import { usePageContext } from '../../contexts/common/page'
import { PAGES } from '../../config/constants'
import IndexPage from '../../pages/IndexPage'
import ProductFormPage from '../../pages/ProductFormPage'
import DeleteProductsPage from '../../pages/DeleteProductsPage'

const { INDEX, ADD_PRODUCT, EDIT_PRODUCT, PRODUCTS_LIST_TO_EDIT, PRODUCTS_LIST_TO_DELETE } = PAGES

export default function PageController () {
  const { page, goIndex, goProductsListToEdit } = usePageContext()
  const { addNewProduct, editProduct } = useProductsContext()
  if (page.type === INDEX) {
    return <IndexPage />
  }
  if (page.type === ADD_PRODUCT) {
    return <ProductFormPage onGoBack={goIndex} onSubmit={addNewProduct} />
  }
  if (page.type === EDIT_PRODUCT) {
    return <ProductFormPage onGoBack={goProductsListToEdit} initialProduct={page.value} onSubmit={editProduct} />
  }
  if (page.type === PRODUCTS_LIST_TO_EDIT) {
    // return <ProductsListPage mode='edit' onGoBack={goIndex} />
  }
  if (page.type === PRODUCTS_LIST_TO_DELETE) {
    return <DeleteProductsPage mode='delete' onGoBack={goIndex} />
  }
}