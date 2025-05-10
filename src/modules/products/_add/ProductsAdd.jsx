import ButtonPrimary from '../components/ButtonPrimary'
import ButtonSecondary from '../components/ButtonSecondary'
import ButtonCircle from '../components/ButtonCircle'
import IconAdd from './components/IconAdd'
import ProductImage from './components/ProductImage'

export default function ProductsAdd() {
  return (
    <>
      <main className='flex-grow flex flex-col gap-y-4 items-center py-9'>
        <h2 className='font-bold text-lg'>Add product</h2>
        <form action="" className='flex flex-col gap-2'>
          <label htmlFor="">Name:</label>
          <input className='Input' placeholder='Cotton T-shirt' autoFocus />
          <label htmlFor="">Price:</label>
          <input className='Input' placeholder='12.99' />
          <label htmlFor="">Image:</label>
          <div>
            <ProductImage className='size-20' />
            <ButtonCircle>
              <IconAdd />
            </ButtonCircle>
          </div>
          <div className='flex flex-wrap-reverse gap-5 justify-center mt-6'>
            <ButtonSecondary className='w-24'>
              Cancel
            </ButtonSecondary>
            <ButtonPrimary className='w-24'>
              Add
            </ButtonPrimary>
          </div>
        </form>
      </main>
    </>
  )
}