import { Table, Row } from '../common/Table'
import { arrayTableHeader } from '../../config/constants'

export default function TableOfProducts ({ className = '', products }) {
  return (
    <Table cols={arrayTableHeader} className={`w-full ${className}`} >
      {products.map(({ id, name, price, count }) => (
          <Row key={id} cols={[
            { value: name, className: '!text-left' },
            { value: `$${price}`, className: 'hidden sm:table-cell' },
            { value: count, className: 'hidden sm:table-cell' },
            { value: `$${price*count}` },
          ]} />
        ))}
    </Table>
  )
}