import Table from '../common/Table'

const cols = [
  { key: 'name', label: 'Name', important: true },
  { key: 'price', label: 'Price', important: true, render: price => `$${price}` },
]

export default function TableOfProducts({ products, filter, onRowClick }) {
  const filteredProducts = filter ? products.filter(filter) : products

  return (
    <Table columns={cols} data={filteredProducts} onRowClick={onRowClick} />
  )
}