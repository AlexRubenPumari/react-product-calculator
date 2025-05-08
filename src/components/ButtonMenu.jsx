import IconMenu from './icons/IconMenu'

export default function ButtonMenu({ className, onClick }) {
  return (
    <button
      className={`Button${ className ? ` ${className}` : '' }`}
      onClick={onClick}
    >
      <IconMenu className='w-5' />
    </button>
  )
}
