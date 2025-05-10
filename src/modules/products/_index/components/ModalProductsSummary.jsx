import { useContext } from 'react'
import { ProductsContext } from '../../contexts/products'
import { getTotal } from '../../logic/products'
import Modal from '../../components/Modal'
import ButtonPrimary from '../../components/ButtonPrimary'
import TableOfProducts from './TableOfProducts'

export default function ModalProductsSummary({ onClose }) {
  const { filteredProducts } = useContext(ProductsContext)
  return (
    <Modal className='flex flex-col items-center gap-4' onClose={onClose}>
      <TableOfProducts
        products={filteredProducts}
        className='max-h-[50vh] Scrollbar'
      />
      <span className='text-lg font-bold'>
        {`Total: $${getTotal(filteredProducts)}`}
      </span>
      <ButtonPrimary className='w-48' onClick={onClose}>
        Edit summary
      </ButtonPrimary>
    </Modal>
  )
}
