import { classNames } from '../../logic/common/classNames'

const Table = ({ columns, data, onRowClick }) => {
  const trClasses = classNames(
    'group border-b-2 last:border-b-0 hover:bg-black/10 transition-colors',
    onRowClick && 'cursor-pointer'
  )
  return (
    <div className="overflow-x-auto">
      <div className="relative min-w-max before:absolute before:w-full before:h-9 before:bg-lime-600 before:top-0 before:rounded-lg">
        <table className='min-w-full relative'>
          <thead className='text-white uppercase select-none'>
            <tr>
              {columns.map(col => (
                <th
                  key={col.key}
                  scope='col'
                  className={classNames(
                    'px-4 py-2 text-center text-sm font-bold',
                    !col.important && 'hidden md:table-cell',
                  )}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className={trClasses} onClick={() => onRowClick?.(row)}>
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={classNames(
                      'px-2 py-3 sm:py-2',
                      !col.important && 'hidden md:table-cell',
                      col.key === 'name' ? 'text-left' : 'text-center'
                    )}
                  >
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table