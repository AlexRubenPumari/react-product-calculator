import { useState, useRef } from 'react'
import { usePageContext } from '../contexts/common/page'
import { useProductsContext } from '../contexts/products/products'
import TableOfProducts from '../components/products/TableOfProducts'
import Alert from '../components/common/Alert'
import WithoutProducts from '../components/products/WithoutProducts'
import ActionButtons from '../components/common/ActionButtons'

export default function ProductsListToDeletePage({ mode, onGoBack }) {
  const { goEditProduct } = usePageContext()
  const { products, deleteProducts } = useProductsContext()

  const refProducts = useRef([])
  const [productsToDelete, setProductsToDelete] = useState(products)

  const hasProducts = products?.length > 0

  const onRowClick = product => {
    if (mode === 'edit') {
      goEditProduct(product)
    } else if (mode === 'delete') {
      refProducts.current.push(product.id)
      setProductsToDelete(prev => prev.filter(p => p.id !== product.id))
    }
  }
  const handleAccept = () => {
    deleteProducts(refProducts.current)
      .then(() => console.log(refProducts.current))
  }

  const ProductsTableContent = () => (
    <>
      <div className='grow flex flex-col gap-y-4 w-full max-w-3xl mx-auto p-4'>
        <h2 className='font-bold text-center'>
          {`${mode.toUpperCase()} PRODUCTS`}
        </h2>
        <Alert>
          {
            mode === 'delete'
              ? '⚠️ Select the products to delete, then save the changes'
              : '⚠️ Select a product to edit'
          }
        </Alert>
        <TableOfProducts
          products={productsToDelete}
          onRowClick={onRowClick}
        />
      </div>
      <ActionButtons
        onCancel={onGoBack}
        onAccept={mode === 'delete' && handleAccept}
        acceptText={mode === 'delete' && 'Save'}
      />
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