import Table from '../common/Table'
import Checkbox from '../common/Checkbox'

const colsViews = {
  minimal: [
    { key: 'id', label: 'Id', important: true },
    { key: 'name', label: 'Name', important: true },
    { key: 'price', label: 'Price', render: price => `$${price}` },
    { key: 'subtotal', label: 'Subtotal', render: (_, { count, price }) => `$${count * price}` },
  ],
  partial: [
    { key: 'id', label: 'Id' },
    { key: 'name', label: 'Name', important: true },
    { key: 'price', label: 'Price', important: true, render: price => `$${price}` },
    { key: 'count', label: 'Count' },
  ],
}

export default function TableOfProducts({
  products, filter, colsView, onRowClick
}) {
  const filteredProducts = filter ? products.filter(filter) : products

  return (
    <Table columns={colsView} data={filteredProducts} onRowClick={onRowClick} />
  )
}