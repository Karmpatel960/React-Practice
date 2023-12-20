import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react'

const InputBar = forwardRef(function InputBar({}, ref) {
  const [project, setProject] = useState({
    title: '',
    description: '',
    date: '',
  })

  const dialog = useRef()

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle saving the project data, you can replace the console.log with your save logic
    console.log('Saving project:', project)
    // Close the dialog after saving
    dialog.current.close()
  }

  const handleCancel = () => {
    // Reset the project state and close the dialog
    setProject({ title: '', description: '', date: '' })
    dialog.current.close()
  }

  useImperativeHandle(ref, () => {
    return {
      open() {
        if (dialog.current) {
          // Reset project state when opening the dialog
          setProject({ title: '', description: '', date: '' })
          dialog.current.showModal()
        }
      },
    }
  })

  return (
    <div>
      <dialog
        ref={dialog}
        className='backdrop:bg-stone-900/90 p-4 rounded-md shadow-md'
        onClose={handleCancel}
      >
        <p className='flex flex-col gap-1 my-4'>Add Project</p>
        <menu className='flex items-center justify-end gap-4 my-4'>
          <form onSubmit={handleSubmit} className='mt-4 text-right'>
            <label className='text-sm font-bold uppercase text-stone-500'>
              Title
            </label>
            <input
              type='text'
              name='title'
              value={project.title}
              onChange={handleChange}
              className='w-full p-2 rounded-md bg-stone-800 text-stone-50'
            />

            <label className='text-sm font-bold uppercase text-stone-500'>
              Description
            </label>
            <input
              type='text'
              name='description'
              value={project.description}
              onChange={handleChange}
              className='w-full p-2 rounded-md bg-stone-800 text-stone-100'
            />

            <label className='text-sm font-bold uppercase text-stone-500'>
              Date
            </label>
            <input
              type='date'
              name='date'
              value={project.date}
              onChange={handleChange}
              className='w-full p-2 rounded-md bg-stone-800 text-stone-50 focus:outline-none focus:border-stone-600'
            />

            <button
              type='submit'
              className='text-stone-800 hover:text-stone-950'
            >
              Save
            </button>
            <button
              type='button'
              onClick={handleCancel}
              className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'
            >
              Cancel
            </button>
          </form>
        </menu>
      </dialog>
    </div>
  )
})

export default InputBar
