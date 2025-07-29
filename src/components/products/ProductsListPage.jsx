import { usePageContext } from '../../contexts/common/page'
import { useProductsContext } from '../../contexts/products/products'
import TableOfProducts from './TableOfProducts'
import WithoutProducts from './WithoutProducts'

export default function ProductsListPage() {
  const { goEditProduct } = usePageContext()
  const { products } = useProductsContext()
  const hasProducts = products?.length > 0
  const ProductsTableContent = () => (
    <div className='w-full p-4'>
      <h2 className='font-bold text-center mb-4'>LIST OF PRODUCTS</h2>
      <p className='mb-2'>Select a product to edit:</p>
      <TableOfProducts
        products={products}
        onRowClick={product => goEditProduct(product)}
      />
    </div>
  )

  return (
    <main className='flex-grow flex justify-stretch py-9 Scrollbar'>
      {
        hasProducts
          ? <ProductsTableContent />
          : <WithoutProducts />
      }
    </main>
  )
}