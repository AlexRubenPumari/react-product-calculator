import { useId } from 'react'

export default function Input({
  label,
  error,
  placeholder,
  type = 'text',
  min,
  max,
  value,
  onChange,
}) {
  const idInput = useId()
  return (
    <>
      {label && <label htmlFor={idInput}>{`${label}:`}</label>}
      <div className='mb-7 relative'>
        <input
          id={idInput}
          className='Input'
          type={type}
          value={value ?? ''}
          min={min}
          max={max}
          placeholder={placeholder}
          onChange={onChange}
        />
        {error && (
          <span className='LabelError'>
            {error}
          </span>
        )}
      </div>
    </>
  )
}
