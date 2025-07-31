import Table from '../common/Table'

const formatPrice = price => `$${price}`
const formatSubtotal = (_, { count, price }) => `$${count * price}`

const columnPresets = {
  summary: [
    { key: 'id', label: 'Id' },
    { key: 'name', label: 'Name', important: true },
    { key: 'price', label: 'Price', important: true, render: formatPrice },
    { key: 'count', label: 'Count' },
    { key: 'subtotal', label: 'Subtotal', render: formatSubtotal },
  ],
  partial: [
    { key: 'id', label: 'Id' },
    { key: 'name', label: 'Name', important: true },
    { key: 'price', label: 'Price', important: true, render: formatPrice },
    { key: 'count', label: 'Count' },
  ],
}

export default function ProductsTable({
  products, filter, colsMode = 'summary', onRowClick
}) {
  const visibleProducts = filter ? products.filter(filter) : products
  const columns = columnPresets[colsMode]

  return <Table columns={columns} data={visibleProducts} onRowClick={onRowClick} />
}