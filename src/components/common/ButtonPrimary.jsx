export default function ButtonPrimary({
  children, className = '', onClick, type = 'submit'
}) {
  return (
    <button
      className={`Button ButtonPrimary ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}
