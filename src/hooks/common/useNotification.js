import { useEffect, useState } from 'react'

export function useNotification (duration = 3000) {
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    if (!notification) return

    const timeoutId = setTimeout(() => {
      setNotification(null)
    }, duration)

    return () => clearTimeout(timeoutId)
  }, [notification])

  return { notification, setNotification }
}