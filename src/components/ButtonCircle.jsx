export default function ButtonCircle({ children, className, onClick }) {
  const btnClassName = `Button rounded-full aspect-square${ className ? ` ${className}` : '' }`
  return (
    <button className={btnClassName} onClick={onClick}>
      { children }
    </button>
  )
}
