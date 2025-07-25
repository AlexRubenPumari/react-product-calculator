export default function ButtonCircle({
  children, className = '', onClick, title = '', type = 'button', disabled,
}) {
  const btnClassName = `Button rounded-full ${className}`
  return (
    <button
      type={type}
      className={btnClassName}
      disabled={disabled}
      onClick={onClick}
      title={title}
    >
      {children}
    </button>
  )
}
