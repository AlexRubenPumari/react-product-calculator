import { useMemo } from 'react'
import Checkbox from '../common/Checkbox'
import Table from '../common/Table'

export default function SelectableProductsTable({
  products, selectedProductIds, onRowClick,
}) {
  const tableColumns = useMemo(() => [
    {
      key: 'selected',
      important: true,
      render: (_, row) => (
        <Checkbox
          value={selectedProductIds.includes(row.id)}
          className="text-green-600 group-hover:scale-110"
        />
      ),
    },
    { key: 'id', label: 'Id' },
    { key: 'name', label: 'Name', important: true },
    { key: 'price', label: 'Price', important: true, render: price => `$${price}` },
    { key: 'count', label: 'Count' },
  ], [selectedProductIds])

  return (
    <Table
      columns={tableColumns}
      data={products}
      onRowClick={onRowClick}
    />
  )
}