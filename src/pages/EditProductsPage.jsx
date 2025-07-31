import { usePageContext } from '../contexts/common/page'
import { useProductsContext } from '../contexts/products/products'
import ProductsTable from '../components/products/ProductsTable'
import Alert from '../components/common/Alert'
import WithoutProducts from '../components/products/WithoutProducts'
import ButtonSecondary from '../components/common/ButtonSecondary'

export default function EditProductsPage ({ onGoBack }) {
  const { goEditProduct } = usePageContext()

  const { products } = useProductsContext()
  const hasProducts = products?.length > 0

  const handleRowClick = product => goEditProduct(product)

  if (!hasProducts) {
    return (
      <WithoutProducts>There are no products to edit. Please add one!</WithoutProducts>
    )
  }

  return (
    <main className='flex-grow flex flex-col items-center py-9 Scrollbar'>
      <div className='grow flex flex-col gap-y-4 w-full max-w-3xl mx-auto p-4'>
        <h2 className='font-bold text-center uppercase'>Edit products</h2>
        <Alert>⚠️ Select a product to edit</Alert>
        <ProductsTable
          colsMode='partial'
          data={products}
          onRowClick={handleRowClick}
        />
      </div>
      <ButtonSecondary className='w-24' onClick={onGoBack}>
        Cancel
      </ButtonSecondary>
    </main>
  )
}