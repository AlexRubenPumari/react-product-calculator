import { Menu } from './Menu'

export default function Sidebar({ onClose, items, onClicks }) {
  const handleItemClick = i => {
    onClose()
    onClicks[i]()
  }

  return (
    <div className='Overlay' onClick={onClose}>
      <nav
        onClick={e => e.stopPropagation()}
        className='w-3/5 max-w-40 h-full py-6 rounded-r-lg overflow-x-hidden bg-gray-100 animate-expand-x'
      >
        <Menu items={items} onItemClick={handleItemClick} />
      </nav>
    </div>
  )
}
