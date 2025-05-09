import ButtonClose from './ButtonClose'

export default function Modal ({ children, onClose }) {
  return (
    <div
      className='Overlay flex items-center justify-center'
      onClick={onClose}
    >
      <div
        className='px-4 py-7 bg-gray-100 rounded-lg'
        onClick={e => e.stopPropagation()}
      >
        <ButtonClose className='block ml-auto' onClick={onClose} />
        <div>
          { children }
        </div>
      </div>
    </div>
  )
}