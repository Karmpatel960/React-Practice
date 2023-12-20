import React, { useRef, useState } from 'react'
import InputBar from './InputBar'
import TaskDetail from './TaskDetail'

export default function Slider({
  onStart,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  const dialog = useRef()

  return (
    <>
      <InputBar ref={dialog} />
      <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
        <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>
          YOUR PROJECTS
        </h2>
        <button
          onClick={onStart}
          className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100'
        >
          + Add Project
        </button>
        <ul className='mt-8'>
          {projects.map((project) => {
            const isSelected = project.id === selectedProjectId
            return (
              <li key={project.id}>
                <button
                  className={`w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800 ${
                    isSelected
                      ? 'bg-stone-800 text-stone-200'
                      : 'tect-stone-400'
                  }`}
                  onClick={() => onSelectProject(project.id)}
                >
                  {project.title}
                </button>
              </li>
            )
          })}
        </ul>
      </aside>
    </>
  )
}
