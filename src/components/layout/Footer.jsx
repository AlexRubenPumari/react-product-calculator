import IconCalculator from '../icons/IconCalculator'
import ButtonCircle from '../ButtonCircle'
import Modal from '../Modal'
import { useState } from 'react'

export default function Footer () {
  const [toggleModal, setToggleModal] = useState(false)
  return (
    <>
      { toggleModal && (
        <Modal onClose={() => setToggleModal(false)}>
          <span>Total de venta: $100</span>
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

function ModalPpal ({ onClose }) {
  return (
    <Modal onClose={onClose}>
        <span>Total de venta: $100</span>
    </Modal>
  )
}