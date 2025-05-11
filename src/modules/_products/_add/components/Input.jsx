import { useId } from 'react'

export default function Input({
  label,
  error,
  placeholder,
  type = 'text',
  value,
  onChange,
}) {
  const idInput = useId()
  return (
    <>
      {label && <label htmlFor={idInput}>{`${label}:`}</label>}
      <div className='mb-7 relative'>
        <input
          value={value ?? ''}
          type={type}
          id={idInput}
          className='Input'
          placeholder={placeholder}
          onChange={onChange}
        />
        {error && (
          <span className='absolute left-0 -bottom-6 text-sm text-red-500'>
            {error}
          </span>
        )}
      </div>
    </>
  )
}
