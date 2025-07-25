import { useProductsContext } from '../../contexts/products/products'
import { Table, Row } from '../common/Table'
import { arrayTableHeader } from '../../config/constants'

export default function TableOfProducts({
  className = '', filter = () => true, onRowClick
}) {
  const { products } = useProductsContext()
  const filteredProducts = products.filter(filter)

  return (
    <Table cols={arrayTableHeader} className={`w-full ${className}`}>
      {filteredProducts.map(product => {
        const { id, name, price, count } = product
        return (
          <Row key={id} data={product} onClick={onRowClick} cells={[
            { value: name, className: '!text-left' },
            { value: `$${price}`, className: 'hidden sm:table-cell' },
            { value: count, className: 'hidden sm:table-cell' },
            { value: `$${price*count}` },
          ]} />
        )    
      })}
    </Table>
  )
}