import { useContext, useId, useState } from 'react'
import { PageContext } from '../../../contexts/page'
import ButtonPrimary from '../components/ButtonPrimary'
import ButtonSecondary from '../components/ButtonSecondary'
import ButtonCircle from '../components/ButtonCircle'
import IconAdd from './components/IconAdd'
import ProductImage from './components/ProductImage'
import Modal from '../components/Modal'
import ListOfProductImages from './components/ListOfProductImages'

export default function ProductsAdd() {
  const { goIndexPage } = useContext(PageContext)
  const [toggleModal, setToggleModal] = useState(false)
  const [inputsStates, setInputsStates] = useState([
    { value: null, error: null },
    { value: null, error: null },
    { value: null },
  ])
  const handleChange = (e, i, validator) => {
    const string = e.target.value
    const newInputs = inputsStates.map((inputState, index) => {
      if (index === i)
        return {
          ...inputState,
          value:
            !validator || validator(string[string.length - 1] ?? '')
              ? string
              : inputState.value,
        }
      return { ...inputState }
    })
    setInputsStates(newInputs)
  }
  const isValidPrice = string => '.123456789'.includes(string)
  return (
    <>
      <main className='flex-grow flex flex-col gap-y-4 items-center justify-center py-9'>
        <h2 className='font-bold text-lg'>Add product</h2>
        <form action='' className='max-w-full flex flex-col gap-2'>
          <Input
            label='Name'
            placeholder='Cotton T-shirt'
            value={inputsStates[0].value}
            error={inputsStates[0].error}
            onChange={e => handleChange(e, 0, null)}
          />
          <Input
            label='Price'
            placeholder='12.99'
            value={inputsStates[1].value}
            error={inputsStates[1].error}
            onChange={e => handleChange(e, 1, isValidPrice)}
          />
          <label htmlFor=''>Select image:</label>
          <div className='flex flex-wrap items-center gap-4 justify-center'>
            <ProductImage
              className='basis-32 flex-grow'
              type={1}
              styles={{ iceCreamColor: 'red' }}
            />
            <ButtonCircle
              className='ButtonPrimary'
              title='Choose a image'
              onClick={() => setToggleModal(true)}>
              <IconAdd className='size-4' />
            </ButtonCircle>
          </div>
          <div className='flex flex-wrap-reverse gap-5 justify-center mt-6'>
            <ButtonSecondary
              className='w-24'
              onClick={() => goIndexPage()}
            >
              Cancel
            </ButtonSecondary>
            <ButtonPrimary
              className='w-24'
              onClick={null}
            >
              Add
            </ButtonPrimary>
          </div>
        </form>
      </main>
      {toggleModal && (
        <ModalProductsImages onClose={() => setToggleModal(false)} />
      )}
    </>
  )
}
function ModalProductsImages({ onClose }) {
  return (
    <Modal className='Scrollbar overflow-y-auto' onClose={onClose}>
      <h3 className='mb-5 text-center'>Select a image:</h3>
      <ListOfProductImages />
    </Modal>
  )
}
function Input({ label, error, placeholder, type = 'text', value, onChange }) {
  const idInput = useId()
  return (
    <>
      {label && <label htmlFor={idInput}>{`${label}:`}</label>}
      <div className='mb-7 relative'>
        <input
          value={value ?? ''}
          type={type}
          id={idInput}
          className='Input'
          placeholder={placeholder}
          onChange={onChange}
        />
        {error && (
          <span className='absolute left-0 -bottom-6 text-sm text-red-500'>
            {error}
          </span>
        )}
      </div>
    </>
  )
}
