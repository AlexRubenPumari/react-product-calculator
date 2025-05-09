export default function ButtonClose ({ className = '', onClick }) {
  const btnClassName = `Button font-bold text-3xl hover:text-gray-500 ${className}`
  return (
    <button className={btnClassName} onClick={onClick}>
      ×
    </button>
  )
}