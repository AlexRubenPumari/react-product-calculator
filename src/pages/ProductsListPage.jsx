import { useMemo, useState } from 'react'
import { useProductsContext } from '../contexts/products/products'
import TableOfProducts from '../components/products/TableOfProducts'
import Alert from '../components/common/Alert'
import WithoutProducts from '../components/products/WithoutProducts'
import ActionButtons from '../components/common/ActionButtons'
import Checkbox from '../components/common/Checkbox'
import Notification from '../components/common/Notification'
import { useNotification } from '../hooks/common/useNotification'

export default function DeleteProductsPage({ onGoBack }) {
  const { notification, setError, setSuccess } = useNotification()
  const { products, deleteProducts } = useProductsContext()
  const hasProducts = products?.length > 0

  const [productsToDelete, setProductsToDelete] = useState([])
  const toggleProductSelection = id => {
    setProductsToDelete(prev =>
      prev.includes(id) ? prev.filter(pId => pId !== id) : [...prev, id]
    )
  }

  const handleRowClick = product => toggleProductSelection(product.id)
  const handleDelete = () => {
    console.log('Deleting products:', productsToDelete)
    deleteProducts(productsToDelete)
      .then(() => {
        setSuccess('Existo')
        setProductsToDelete([])
      })
      .catch(() => setError('Error'))
  }

  const tableColumns = useMemo(() => [
    {
      key: 'selected',
      important: true,
      render: (_, row) => (
        <Checkbox
          value={productsToDelete.includes(row.id)}
          className="text-green-600 group-hover:scale-110"
        />
      ),
    },
    { key: 'id', label: 'Id' },
    { key: 'name', label: 'Name', important: true },
    { key: 'price', label: 'Price', important: true, render: (price) => `$${price}`},
    { key: 'count', label: 'Count' },
  ], [productsToDelete])

  if (!hasProducts) return (
    <WithoutProducts>No products to delete. Start by adding one!</WithoutProducts>
  )

  return (
    <main className="flex-grow flex flex-col py-9 Scrollbar">
      <div className="grow flex flex-col gap-y-4 w-full max-w-3xl mx-auto p-4">
        <h2 className="font-bold text-center">DELETE PRODUCTS</h2>
        <Alert>⚠️ Select the products to delete, then commit the changes</Alert>
        <TableOfProducts
          colsView={tableColumns}
          products={products}
          onRowClick={handleRowClick}
        />
      </div>
      <Notification
        type={notification?.type}
        message={notification?.message}
        className='mb-4'
      />
      <ActionButtons
        onCancel={onGoBack}
        onAccept={handleDelete}
        acceptText="Commit"
      />
    </main>
  )
}