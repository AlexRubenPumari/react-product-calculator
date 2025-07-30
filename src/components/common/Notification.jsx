import { classNames } from '../../logic/common/classNames'

export default function Notification({ type, className, message }) {
  const spanClassName = classNames(
    'font-bold inline-block h-4 transition-all duration-300',
    type === 'error' && 'text-red-600',
    type === 'success' && 'text-green-600',
    message ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
    className,
  )
  return <span className={spanClassName}>{message}</span>
}