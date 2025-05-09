export default function ButtonCircle ({
  children,
  className,
  onClick,
  disabled,
}) {
  const btnClassName = `Button rounded-full aspect-square${
    className ? ` ${className}` : ''
  }`
  return (
    <button className={btnClassName} onClick={onClick} disabled={disabled} >
      {children}
    </button>
  )
}
