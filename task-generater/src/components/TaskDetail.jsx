import React, { useRef, useState } from 'react'
import Input from './Input'
import Task from './Task'

export default function TaskDetail({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  task,
}) {
  const formatDate = new Date(project.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  if (!project) {
    return <div>No project selected</div>
  }

  return (
    <>
      <div className='w-[35rem] mt-16'>
        <header className='pb-4 mb-4 border-b-2 border-stone-300'>
          <div className='flex items-center justify-between'>
            <h1 className='text-3xl font-bold text-stone-600 mb-2'>
              Name: {project.title}
            </h1>
            <button
              className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100'
              onClick={onDelete}
            >
              Delete
            </button>
          </div>
          <p className='mb-4 text-stone-400 whitespace-pre-wrap'>
            Description: {project.description}
          </p>
          <p className='mb-4 text-stone-400'>Date: {formatDate}</p>
        </header>
        <h1 className='text-3xl font-bold text-stone-600 mb-2'>TASK</h1>
        <Task onAdd={onAddTask} onDelete={onDeleteTask} task={task} />
      </div>
    </>
  )
}
