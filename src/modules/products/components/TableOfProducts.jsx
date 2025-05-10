import { Table, Row } from './Table'
import { arrayTableHeader } from '../config/constants'

export default function TableOfProducts ({ className = '', products }) {
  return (
    <Table cols={arrayTableHeader} className={className} >
      {products.map(({ id, name, price, count }) => (
          <Row key={id} cols={[
            { value: name, className: '!text-left' },
            { value: `$${price}` },
            { value: count },
            { value: `$${price*count}` },
          ]} />
        ))}
    </Table>
  )
}