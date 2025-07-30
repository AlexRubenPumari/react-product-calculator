import { usePageContext } from '../contexts/common/page'
import { useProductsContext } from '../contexts/products/products'
import TableOfProducts from '../components/products/TableOfProducts'
import Alert from '../components/common/Alert'
import WithoutProducts from '../components/products/WithoutProducts'
import ActionButtons from '../components/common/ActionButtons'

export default function ProductsListPage({ onGoBack }) {
  const { goEditProduct } = usePageContext()
  const { products } = useProductsContext()
  const hasProducts = products?.length > 0
  const ProductsTableContent = () => (
    <>
      <div className='grow flex flex-col gap-y-4 w-full p-4'>
        <h2 className='font-bold text-center'>LIST OF PRODUCTS</h2>
        <Alert>⚠️ Select a product to edit</Alert>
        <TableOfProducts
          products={products}
          onRowClick={product => goEditProduct(product)}
        />
      </div>
      <ActionButtons onAccept={onGoBack} acceptText='Cancel' />
    </>
  )

  return (
    <main className='flex-grow flex flex-col py-9 Scrollbar'>
      {
        hasProducts
          ? <ProductsTableContent />
          : <WithoutProducts />
      }
    </main>
  )
}