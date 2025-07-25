import { useToggle } from '../../hooks/common/useToggle'
import ButtonMenu from './ButtonMenu'
import SidebarController from './SidebarController'

export default function Header() {
  const { value: isSidebarOpen, toggle: toggleSidebar } = useToggle()

  return (
    <>
      <header
        className='flex items-center gap-4 min-h-16 px-4 bg-lime-600 text-white rounded-b-lg select-none'
      >
        <ButtonMenu
          className='ButtonPrimary'
          onClick={toggleSidebar}
        />
        <h1 className='text-2xl font-bold'>Sales Calculator</h1>
      </header>
      {isSidebarOpen && <SidebarController onClose={toggleSidebar} />}
    </>
  )
}