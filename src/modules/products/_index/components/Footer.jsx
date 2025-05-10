import { useContext, useState } from 'react'
import { ProductsContext } from '../../contexts/products'
import IconCalculator from './IconCalculator'
import ButtonCircle from '../../components/ButtonCircle'
import ModalProductsSummary from './ModalProductsSummary'

export default function Footer() {
  const { filteredProducts } = useContext(ProductsContext)
  const [toggleModal, setToggleModal] = useState(false)
  return (
    <>
      {toggleModal && (
        <ModalProductsSummary
          onClose={() => setToggleModal(false)}
        />
      )}
      <footer className='flex-shrink-0 h-10 px-4 relative bg-lime-600 rounded-tl-lg rounded-tr-lg'>
        <ButtonCircle
          className='ButtonPrimary-bold absolute left-1/2 -translate-x-1/2 -translate-y-1/2'
          onClick={() => setToggleModal(true)}
          disabled={filteredProducts.length === 0}
          spacing='md'
        >
          <IconCalculator className='w-7' />
        </ButtonCircle>
      </footer>
    </>
  )
}