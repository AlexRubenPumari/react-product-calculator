import { useToggle } from '../../hooks/common/useToggle'
import { useProductsContext } from '../../contexts/products/products'
import { IconCalculator } from './Icons'
import ButtonCircle from './ButtonCircle'
import ModalProductsSummary from '../products/ModalProductsSummary'

export default function Footer() {
  const { products } = useProductsContext()
  const { value: isModalOpen, toggle: toggleModal } = useToggle() 
  const hasProducts = products?.some(({ count }) => count > 0 )

  return (
    <>
      {isModalOpen && <ModalProductsSummary onClose={toggleModal} />}

      <footer
        className='flex-shrink-0 h-12 px-4 relative bg-lime-600 rounded-tl-lg rounded-tr-lg'
      >
        <ButtonCircle
          className='ButtonPrimary-bold p-6 sm:p-5 absolute left-1/2 -translate-x-1/2 -translate-y-1/2'
          onClick={toggleModal}
          disabled={!hasProducts}
        >
          <IconCalculator className='w-7' />
        </ButtonCircle>
      </footer>
    </>
  )
}