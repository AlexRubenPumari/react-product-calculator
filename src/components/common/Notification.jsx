import { classNames } from '../../logic/common/classNames'

export default function Notification({ type, className, children }) {
  const spanClassName = classNames(
    'font-bold',
    type === 'error' && 'text-red-600',
    type === 'success' && 'text-green-500',
    className,
  )
  return (
    <span className={spanClassName}>
      {children}
    </span>
  )
}