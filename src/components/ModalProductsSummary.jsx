import { useContext } from 'react'
import { ProductsContext } from '../contexts/products'
import { getTotal } from '../logic/products'
import { Table, Row } from './Table'
import Modal from './Modal'
import ButtonPrimary from './ButtonPrimary'

export default function ModalProductsSummary({ onClose }) {
  const { filteredProducts } = useContext(ProductsContext)
  return (
    <Modal className='flex flex-col items-center gap-4' onClose={onClose}>
      <Table cols={['Name', 'Price', 'Count', 'Total']}>
        {filteredProducts.map(({ id, name, price, count }) => (
          <Row key={id} cols={[
            { value: name, className: '!text-left' },
            { value: `$${price}` },
            { value: count },
            { value: `$${price*count}` },
          ]} />
        ))}
      </Table>
      <span className='text-lg font-bold'>
        {`Total: $${getTotal(filteredProducts)}`}
      </span>
      <ButtonPrimary className='w-48' onClick={onClose}>Edit summary</ButtonPrimary>
    </Modal>
  )
}
