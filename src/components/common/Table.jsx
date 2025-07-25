import { classNames } from '../../logic/common/classNames'

export function Table({ cols, children, className }) {
  const tableClassName = classNames(
    'relative before:absolute before:w-full before:h-10 before:bg-lime-600 before:top-0 before:rounded-lg', className
  )

  return (
    <div className={tableClassName}>
      <table className='relative w-full'>
        <thead className='text-white uppercase select-none'>
          <tr>
            {cols.map(({ value, className }, i) => (
              <th key={i} scope='col' className={classNames('p-2', className)}>
                {value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}

export function Row({ cells, onClick, data }) {
  const trClass = classNames(
    'border-b-2 last:border-b-0',
    onClick && 'hover:bg-black/10 transition-colors cursor-pointer'
  )

  return (
    <tr className={trClass} onClick={() => onClick?.(data)}>
      {cells.map(({ value, className }, i) => (
        <td key={i} className={classNames('text-center p-2', className)}>
          {value}
        </td>
      ))}
    </tr>
  )
}