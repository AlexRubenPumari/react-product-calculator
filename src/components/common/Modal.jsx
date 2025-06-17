import ButtonClose from './ButtonClose'

export default function Modal ({ children, className, onClose }) {
  return (
    <div
      className='Overlay flex-center-all'
      onClick={onClose}
    >
      <div
        className='w-[40rem] max-w-[85vw] h-[90vh] px-4 py-7 flex flex-col bg-gray-100 rounded-lg'
        onClick={e => e.stopPropagation()}
      >
        <ButtonClose className='block ml-auto' onClick={onClose} />
        <div className={className}>
          { children }
        </div>
      </div>
    </div>
  )
}