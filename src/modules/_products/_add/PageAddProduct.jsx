import { useContext, useState } from 'react'
import { PageContext } from '../../../contexts/page'
import { AddProductContext } from './contexts/addProduct'
import ModalOfImagesToAddProduct from './components/ModalOfImagesToAddProduct'
import { isValidDecimal } from '../logic/forms'
import FormProduct from '../components/FormProduct'

export default function PageAddProduct() {
  const { goIndexPage } = useContext(PageContext)
  const { product, setProductValueFor, setProductErrorFor, validateCurrentProduct } =
    useContext(AddProductContext)
  const [toggleModal, setToggleModal] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    
    const hasError = validateCurrentProduct()
    console.log(product)
    console.log(hasError ? 'hay error' : 'llmar bd')
  }
  const handleChange = (e, key, validator = () => true) => {
    const string = e.target.value
    if (validator(string.slice(-1))) setProductValueFor(key, string)
  }
  return (
    <>
      <main className='flex-grow flex items-center flex-col gap-y-4 py-9 Scrollbar'>
        <h2 className='font-bold text-lg'>Add product</h2>
        <FormProduct
          type='add'
          currentProduct={product}
          onSubmit={handleSubmit}
          onCancel={() => goIndexPage()}
          onInputChange={[
            e => handleChange(e, 'name'),
            e => handleChange(e, 'price', isValidDecimal),
            () => setToggleModal(true),
          ]}
        />
      </main>
      {toggleModal && (
        <ModalOfImagesToAddProduct onClose={() => setToggleModal(false)} />
      )}
    </>
  )
}
