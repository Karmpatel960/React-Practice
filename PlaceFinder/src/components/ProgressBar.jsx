import { useState, useEffect } from 'react'

export default function ProgressBar({ timer }) {
  const [remainingtime, setRemainingtime] = useState(timer)

  useEffect(() => {
    if (remainingtime <= 0) {
      return
    }
    const timer = setInterval(() => {
      setRemainingtime((prevTime) => prevTime - 10)
    }, 10)

    return () => {
      clearInterval(timer)
    }
  }, [remainingtime])

  return <progress value={remainingtime} max={timer} />
}
