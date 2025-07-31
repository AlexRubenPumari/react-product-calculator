import { useContext } from 'react'
import { PageContext } from '../../contexts/common/page'
import WithoutResults from '../common/WithoutResults'

export default function WithoutProducts({
  children = 'Without any products, you should create one!'
}) {
  const { goAddProduct } = useContext(PageContext)

  return (
    <WithoutResults
      className='grow flex-center-all flex-col gap-6'
      onClick={goAddProduct}
    >
      <p className='w-5/6 text-center'>{children}</p>
    </WithoutResults>
  )
}