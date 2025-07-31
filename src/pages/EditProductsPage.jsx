import { useState, useRef } from 'react'
import { usePageContext } from '../contexts/common/page'
import { useProductsContext } from '../contexts/products/products'
import TableOfProducts from '../components/products/TableOfProducts'
import Alert from '../components/common/Alert'
import WithoutProducts from '../components/products/WithoutProducts'
import ActionButtons from '../components/common/ActionButtons'
import Checkbox from '../components/common/Checkbox'

export default function ProductsListToDeletePage({ mode, onGoBack }) {
  const { goEditProduct } = usePageContext()
  const { products, deleteProducts } = useProductsContext()

  const [productsToDelete, setProductsToDelete] = useState([])

  const viewToSelect = [
    { key: 'selected', important: true, render: (_, row) => {
      return <Checkbox value={productsToDelete.includes(row.id)} className='text-green-600 group-hover:scale-110' />
    } },
    { key: 'id', label: 'Id' },
    { key: 'name', label: 'Name', important: true },
    { key: 'price', label: 'Price', important: true, render: price => `$${price}` },
    { key: 'count', label: 'Count' },
]

  const hasProducts = products?.length > 0

  const handleRowClick = product => {
    if (mode === 'edit') {
      goEditProduct(product)
    } else if (mode === 'delete') {
      if (productsToDelete.includes(product.id)) {
        setProductsToDelete(prev => prev.filter(id => id !== product.id))
      } else {
        setProductsToDelete(prev => [...prev, product.id])
      }
      console.log(product.id)
    }
  }
  const handleAccept = () => {
    // deleteProducts(productsToDelete)
    //   .then(() => console.log(productsToDelete))
    console.log(productsToDelete)
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
              ? '⚠️ Select the products to delete, then commit the changes'
              : '⚠️ Select a product to edit'
          }
        </Alert>
        <TableOfProducts
          colsView={viewToSelect}
          products={products}
          onRowClick={handleRowClick}
        />
      </div>
      <ActionButtons
        onCancel={onGoBack}
        onAccept={mode === 'delete' && handleAccept}
        acceptText={mode === 'delete' && 'Commit'}
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