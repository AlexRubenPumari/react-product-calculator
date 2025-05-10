export function Table({ cols, children, className }) {
  const TableClassName = `relative before:absolute before:w-full before:h-10 before:bg-lime-600 before:top-0 before:rounded-lg${className ? ` ${className}` : ''}`
  return (
    <div className={TableClassName}>
      <table className='relative'>
        <thead className='text-white uppercase select-none'>
          <tr>
            {cols.map((col, index) => (
              <th key={index} className='p-2'>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}

export function Row({ cols }) {
  return (
    <tr className='border-b-2 last:border-b-0'>
      {cols.map(({ value, className }, i) => (
        <td
          key={i}
          className={`text-center p-2 ${className ? className : ''}`}
        >
          {value}
        </td>
      ))}
    </tr>
  )
}
