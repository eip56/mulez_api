import { useState, useEffect } from 'react'

export const useDateTime = () => {
  const [dateTime, setDateTime] = useState(() => {
    const now = new Date()
    return now.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  })

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      setDateTime(
        now.toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
      )
    }

    const intervalId = setInterval(updateDateTime, 60000)

    // Initial call to set the time immediately
    updateDateTime()

    return () => clearInterval(intervalId)
  }, [])

  return dateTime
}
