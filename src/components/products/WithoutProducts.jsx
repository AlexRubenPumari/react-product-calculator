import WithoutResults from '../common/WithoutResults'
import { useContext } from 'react'
import { PageContext } from '../../contexts/common/page'

export default function WithoutProducts() {
  const { goAddProductPage } = useContext(PageContext)

  return (
    <WithoutResults
      className='flex-center-all flex-col gap-6'
      onClick={() => goAddProductPage()}
    >
      <p className='w-5/6 text-center'>
        Without any products, you should create one!
      </p>
    </WithoutResults>
  )
}
