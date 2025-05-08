import { useEffect, useRef, useState } from 'react'
import ButtonMenu from '../ButtonMenu'

export default function Header() {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <header className='flex items-center gap-4 min-h-16 px-4 bg-lime-600 text-white rounded-b-lg'>
        <ButtonMenu
          className='hover:bg-lime-700'
          onClick={() => setToggle(!toggle)}
        />
        <h1 className='text-2xl font-bold'>Sales Calculator</h1>
      </header>
    <Sidebar toggle={toggle} onClose={() => setToggle(false)} />
    </>
  )
}
function Sidebar({ toggle, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-10 bg-black/60${toggle ? ' visible' : ' invisible'}`}
      onClick={onClose}
    >
      <nav
        className={`h-full py-6 rounded-r-lg overflow-x-hidden bg-gray-100 transition-all${toggle ? ' w-3/5' : ' w-0'}
      `}
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
