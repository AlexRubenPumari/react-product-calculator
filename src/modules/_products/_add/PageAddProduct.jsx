import { useContext, useState } from 'react'
import { PageContext } from '../../../contexts/page'
import { AddProductContext } from './contexts/addProduct'
import ModalOfImagesToAddProduct from './components/ModalOfImagesToAddProduct'
import { isValidDecimal } from '../logic/forms'
import FormProduct from '../components/FormProduct'

export default function PageAddProduct() {
  const { goIndexPage } = useContext(PageContext)
  const { product, setProductValueFor } = useContext(AddProductContext)
  const [toggleModal, setToggleModal] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    console.log(product)
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
          onChangeArray={[
            e => handleChange(e, 'name'),
            e => handleChange(e, 'price', isValidDecimal),
          ]}
          onFile={() => setToggleModal(true)}
        />
      </main>
      {toggleModal && (
        <ModalOfImagesToAddProduct onClose={() => setToggleModal(false)} />
      )}
    </>
  )
}