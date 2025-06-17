export default function WithoutResults ({ className, onClick, children }) {
  return (
    <div className={className}>
      {children}
      <button
        onClick={onClick}
        className='Button ButtonPrimary'
      >
        Add product
      </button>
    </div>
  )
}
