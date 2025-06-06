import { useContext } from 'react'
import { PageContext } from '../../../../contexts/page'

export default function WithoutProducts () {
  const { goAddProductPage } = useContext(PageContext)

  return (
    <div className='flex-center-all flex-col gap-6'>
      <p className='w-5/6 text-center'>Without any products, you should create one!</p>
      <button
        onClick={() => goAddProductPage()}
        className='Button ButtonPrimary'
      >
        Añadir producto
      </button>
    </div>
  )
}
