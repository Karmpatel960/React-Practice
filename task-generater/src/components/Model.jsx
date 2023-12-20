import { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'
const Model = forwardRef(function Model({ children }, ref) {
  const dialog = useRef()

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      },
    }
  })

  return createPortal(
    <dialog
      ref={dialog}
      className='backdrop:bg-stone-900/90 p-4 rounded-md shadow-60'
    >
      {children}
      <form method='dialog'>
        <button className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100'>
          Close
        </button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  )
})

export default Model
