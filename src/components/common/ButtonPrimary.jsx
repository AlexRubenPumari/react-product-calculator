export default function ButtonPrimary({ children, className = '', onClick }) {
  return (
    <button
      className={`Button ButtonPrimary ${className}`}
      onClick={onClick}
      type='submit'
    >
      {children}
    </button>
  )
}
