export default function Sidebar({ onClose, items, onClicks }) {
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
          {
            items.map((item, i) => (
              <li
                key={i}
                className='px-4 py-1 hover:bg-black/10 transition-colors cursor-pointer whitespace-nowrap'
                onClick={onClicks[i]}
              >
                  {item}
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}
