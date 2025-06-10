export default function ButtonSecondary({ className = '', onClick, children }) {
  return (
    <button
      className={`Button ButtonSecondary rounded-lg ${className}`}
      onClick={onClick}
      type='button'
    >
      {children}
    </button>
  )
}
