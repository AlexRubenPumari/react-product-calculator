import { useState } from 'react'
import ButtonMenu from './ButtonMenu'

export default function Header() {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <header className='flex items-center gap-4 min-h-16 px-4 bg-lime-600 text-white rounded-b-lg select-none'>
        <ButtonMenu
          className='hover:bg-lime-700'
          onClick={() => setToggle(!toggle)}
        />
        <h1 className='text-2xl font-bold'>Sales Calculator</h1>
      </header>
      { toggle && <Sidebar onClose={() => setToggle(false)} /> }
    </>
  )
}

function Sidebar({ onClose }) {
  return (
    <div
      className='Overlay'
      onClick={onClose}
    >
      <nav
        onClick={e => e.stopPropagation()}
        className='w-3/5 max-w-40 h-full py-6 rounded-r-lg overflow-x-hidden bg-gray-100 animate-expand-x'
      >
        <ul>
          <li className='px-4 py-1 hover:bg-black/10 transition-colors cursor-pointer whitespace-nowrap'>
            Add product
          </li>
          <li className='px-4 py-1 hover:bg-black/10 transition-colors cursor-pointer whitespace-nowrap'>
            Edit product
          </li>
          <li className='px-4 py-1 hover:bg-black/10 transition-colors cursor-pointer whitespace-nowrap'>
            Delete product
          </li>
        </ul>
      </nav>
    </div>
  )
}
