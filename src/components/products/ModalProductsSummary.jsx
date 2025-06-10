import { useContext } from 'react'
import { ProductsContext } from '../../contexts/products/products'
import { getTotal } from '../../logic/products/products'
import Modal from '../common/Modal'
import ButtonPrimary from '../common/Modal'
import TableOfProducts from './TableOfProducts'

export default function ModalProductsSummary({ onClose }) {
  const { filteredProducts } = useContext(ProductsContext)
  return (
    <Modal className='flex flex-col items-center gap-4' onClose={onClose}>
      <div className='w-full max-h-[50vh] Scrollbar'>
        <TableOfProducts
          products={filteredProducts}
          className='min-w-min'
        />
      </div>
      <span className='text-lg text-center font-bold'>
        {`Total: $${getTotal(filteredProducts)}`}
      </span>
      <ButtonPrimary className='w-48 max-w-full' onClick={onClose}>
        Edit summary
      </ButtonPrimary>
    </Modal>
  )
}
