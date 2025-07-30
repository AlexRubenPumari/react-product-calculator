import { classNames } from '../../logic/common/classNames'

export default function Alert ({ type = 'info', className, children }) {
  const divClass = classNames(
    'px-4 py-3 text-center rounded-md border',
    type === 'info' && 'border-yellow-400 bg-yellow-400/30',
    type === 'error' && 'border-red-600 bg-red-600/25',
    type === 'success' && 'border-green-600 bg-green-600/30',
    className,
  )
  return <div className={divClass}>{children}</div>
}