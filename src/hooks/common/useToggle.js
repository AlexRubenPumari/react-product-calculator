import { useState } from 'react'

export function useToggle(initialValue = false) {
  const [value, setValue] = useState(!!initialValue);

  const toggle = () => setValue(prev => !prev)

  const on = () => setValue(true)

  const off = () => setValue(false)

  return { value, toggle, on, off, set: setValue, }
}