import React, { useRef } from 'react'
import Input from './Input'
import Model from './Model'

export default function NewProject(props) {
  const title = useRef()
  const description = useRef()
  const date = useRef()
  const model = useRef()

  function handleSave() {
    const enteredtitle = title.current.value
    const entereddescription = description.current.value
    const entereddate = date.current.value

    if (
      enteredtitle.trim() === '' ||
      entereddescription.trim() === '' ||
      entereddate.trim() === ''
    ) {
      model.current.open()
      return
    }

    props.onAddproject({
      title: enteredtitle,
      description: entereddescription,
      date: entereddate,
    })
  }

  return (
    <>
      <Model ref={model}>
        <h2 className='text-xl font-bold text-stone-500 my-4'>Invalid Input</h2>
        <p className='text-stone-400 mb-4'>Provide All Input in all Field</p>
      </Model>
      <div className='w-[35rem]  mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4 '>
          <li className='flex justify-between my-4'>
            <button
              className='text-stone-800 hover:text-stone-950'
              onClick={props.handleCancel}
            >
              Cancel
            </button>
          </li>
          <li className='flex justify-between my-4'>
            <button
              className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type='text' ref={title} label='Title' />
          <Input ref={description} label='Description' textarea />
          <Input type='date' ref={date} label='Due Date' />
        </div>
      </div>
    </>
  )
}
