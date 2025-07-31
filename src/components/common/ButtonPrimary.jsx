export default function ButtonPrimary({
  children, className = '', onClick, disabled, type = 'submit'
}) {
  return (
    <button
      className={`Button ButtonPrimary ${className}`}
      onClick={onClick}
      type={type}
      disabled={!!disabled}
    >
      {children}
    </button>
  )
}
