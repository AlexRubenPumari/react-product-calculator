import IconMenu from './IconMenu'

export default function ButtonMenu({ className = '', onClick }) {
  return (
    <button
      className={`Button ${className}`}
      onClick={onClick}
    >
      <IconMenu className='size-5' />
    </button>
  )
}
