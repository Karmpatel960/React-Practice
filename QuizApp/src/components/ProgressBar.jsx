import { useState } from 'react'
import { useEffect } from 'react'

export default function ProgressBar({ timeout, onTimeout }) {
  const [remainingtime, setReaminingtime] = useState(timeout)

  useEffect(() => {
    const time = setTimeout(onTimeout, timeout)
    return () => clearTimeout(time)
  }, [timeout, onTimeout])

  useEffect(() => {
    const interval = setInterval(() => {
      setReaminingtime((remainingtime) => remainingtime - 100)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <progress id='question-time' max={timeout} value={remainingtime}></progress>
  )
}
