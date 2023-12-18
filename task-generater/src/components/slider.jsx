import React, { useRef } from 'react'
import InputBar from './InputBar'

export default function Slider() {
  const dialog = useRef()

  function handleProject() {
    if (dialog.current) {
      dialog.current.open()
    }
  }

  return (
    <>
      <InputBar ref={dialog} />
      <aside className='w-1/4 bg-stone-900 text-stone-50 p-4'>
        <h2 className='text-xl font-bold uppercase mb-4'>ADD PROJECTS</h2>
        <button
          onClick={handleProject}
          className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100'
        >
          + Add Project
        </button>
      </aside>
    </>
  )
}
