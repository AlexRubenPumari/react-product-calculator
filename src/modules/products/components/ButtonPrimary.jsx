export default function ButtonPrimary({ children, className, onClick }) {
  return (
    <button
      className={`Button ButtonPrimary-100 rounded-lg ${
        className ? className : ''
      }`}
      onClick={onClick}>
      {children}
    </button>
  )
}