import { useState } from 'react'
import { useProductsContext } from '../contexts/products/products'
import { useNotification } from '../hooks/common/useNotification'
import ActionButtons from '../components/common/ActionButtons'
import Alert from '../components/common/Alert'
import Notification from '../components/common/Notification'
import SelectableProductsTable from '../components/products/SelectableProductsTable'

export default function DeleteProductsPage({ onGoBack }) {
  const { notification, setError, setSuccess } = useNotification()
  const { products, deleteProducts } = useProductsContext()
  const hasProducts = products?.length > 0

  const { selectedRows, toggleRowSelection, deselectAllRows } = useRowSelection()

  const handleRowClick = product => toggleRowSelection(product.id)
  const handleDelete = () => {
    if (selectedRows.length === 0) return setError('No products selected')

    console.log('Deleting products:', selectedRows)
    deleteProducts(selectedRows)
      .then(() => {
        setSuccess('Products were successfully removed')
        deselectAllRows()
      })
      .catch(() => setError('An error occurred while removing the products'))
  }

  return (
    <main className='flex-grow flex flex-col py-9 Scrollbar'>
      <div className='grow flex flex-col gap-y-4 w-full max-w-3xl mx-auto p-4'>
        <h2 className='font-bold text-center uppercase'>Delete products</h2>
        <Alert>
          {hasProducts
            ? '⚠️ Select the products to delete, then commit the changes'
            : '⚠️ No products available to delete'
          }
        </Alert>
        {hasProducts && (
          <SelectableProductsTable
            products={products}
            selectedProductIds={selectedRows}
            onRowClick={handleRowClick}
          />
        )}
      </div>
      <Notification
        type={notification?.type}
        message={notification?.message}
        className='mb-4'
      />
      <ActionButtons
        onSecondaryClick={onGoBack}
        onPrimaryClick={handleDelete}
        secondaryText='Cancel'
        primaryText='Commit'
      />
    </main>
  )
}

function useRowSelection() {
  const [selectedRows, setSelectedRows] = useState([])
  const toggleRowSelection = id => {
    setSelectedRows(prev =>
      prev.includes(id) ? prev.filter(pId => pId !== id) : [...prev, id]
    )
  }
  const deselectAllRows = () => setSelectedRows([])

  return { selectedRows, toggleRowSelection, deselectAllRows }
}