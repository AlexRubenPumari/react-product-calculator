import IconCalculator from '../icons/IconCalculator'
import ButtonCircle from '../ButtonCircle'
import { useState } from 'react'

export default function Footer () {
  const [toggleModal, setToggleModal] = useState(false)
  return (
    <>
      { toggleModal && (
        <Modal>

        </Modal>
      ) }
      <footer className='flex-shrink-0 h-10 px-4 relative bg-lime-600 rounded-tl-lg rounded-tr-lg'>
        <ButtonCircle
        className='p-5 sm:p-4 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lime-700 hover:bg-lime-800 text-white'
        onClick={() => setToggleModal(true)}
        >
          <IconCalculator className='w-7' />
        </ButtonCircle>
      </footer>
    </>
  )
}
function Modal () {
  return (
    <div className='Overlay flex items-center justify-center'>
      <div className='w-10 h-10 bg-gray-100'>
        <button className='' >×</button>
      </div>
    </div>
  )
}
function ButtonClose () {
  return (
    null
  )
}