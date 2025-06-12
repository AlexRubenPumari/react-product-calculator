import { useState } from 'react'
import ButtonMenu from './ButtonMenu'
import SidebarController from './SidebarController'

export default function Header() {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <header className='flex items-center gap-4 min-h-16 px-4 bg-lime-600 text-white rounded-b-lg select-none'>
        <ButtonMenu
          className='ButtonPrimary'
          onClick={() => setToggle(!toggle)}
        />
        <h1 className='text-2xl font-bold'>Sales Calculator</h1>
      </header>
      { toggle && <SidebarController onClose={() => setToggle(false)} /> }
    </>
  )
}