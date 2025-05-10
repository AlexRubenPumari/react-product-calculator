export default function ButtonCircle({
  children,
  className,
  spacing,
  onClick,
  disabled,
}) {
  const btnClassName = `${
    spacing ? `Button-${spacing}` : 'Button'
  } rounded-full aspect-square${className ? ` ${className}` : ''}`
  return (
    <button className={btnClassName} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
