import { useProductsContext } from '../../contexts/products/products'
import { getTotal } from '../../logic/products/products'
import Modal from '../common/Modal'
import ButtonPrimary from '../common/ButtonPrimary'
import TableOfProducts from './TableOfProducts'

export default function ModalProductsSummary({ onClose }) {
  const { products } = useProductsContext()
  return (
    <Modal className='flex flex-col items-center gap-4' onClose={onClose}>
      <div className='w-full max-h-[50vh] Scrollbar'>
        <TableOfProducts
          products={products}
          className='min-w-min'
          filter={({count}) => count > 0}
        />
      </div>
      <span className='text-lg text-center font-bold'>
        {`Total: $${getTotal(products)}`}
      </span>
      <ButtonPrimary className='w-48 max-w-full' onClick={onClose}>
        Edit summary
      </ButtonPrimary>
    </Modal>
  )
}
