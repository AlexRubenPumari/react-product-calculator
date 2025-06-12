import { useContext } from 'react'
import { ModalContext } from '../../contexts/common/modal'
import WithoutResults from '../common/WithoutResults'

export default function WithoutProducts() {
  const { openAddProductModal } = useContext(ModalContext)

  return (
    <WithoutResults
      className='flex-center-all flex-col gap-6'
      onClick={() => openAddProductModal()}
    >
      <p className='w-5/6 text-center'>
        Without any products, you should create one!
      </p>
    </WithoutResults>
  )
}
