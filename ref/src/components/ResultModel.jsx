import { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'

const ResultModel = forwardRef(function ResultModel(
  { targettime, remainingTime, onReset },
  ref
) {
  const dialog = useRef()

  const userLost = remainingTime <= 0

  const format = (remainingTime / 1000).toFixed(2)
  const score = Math.round((1 - remainingTime / (targettime * 1000)) * 100)

  useImperativeHandle(ref, () => {
    return {
      open() {
        if (dialog.current) {
          dialog.current.showModal()
        }
      },
    }
  })
  return createPortal(
    <dialog ref={dialog} className='result-modal' onClose={onReset}>
      {userLost ? <h2>You Lost</h2> : <h2>Your Score : {score}</h2>}
      <p>
        The target time was <strong>{targettime} seconds</strong>
      </p>
      <p>
        You stopped the timer with <strong> {format} seconds left.</strong>
      </p>
      <form method='dialog'>
        <button onSubmit={onReset}>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  )
})

export default ResultModel
