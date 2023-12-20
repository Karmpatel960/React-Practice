import React, { useState } from 'react'
import Slider from './components/slider'
import TaskBar from './components/TaskBar'
import NewProject from './components/NewProject'
import NoProjectAdded from './components/NoProjectAdded'
import TaskDetail from './components/TaskDetail'

function App() {
  const [project, setProject] = useState({
    selectedProjectId: undefined,
    projects: [],
  })

  function handleStart() {
    setProject((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  function handleCancel() {
    setProject((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }

  const selectedProject = project.projects.find(
    (proj) => proj.id === project.selectedProjectId
  )

  let content = <TaskDetail project={selectedProject} />

  console.log(project)

  if (project.selectedProjectId === null) {
    content = (
      <NewProject onAddproject={onAddproject} handleCancel={handleCancel} />
    )
  } else if (project.selectedProjectId === undefined) {
    content = <NoProjectAdded onStart={handleStart} />
  }

  function handleTaskDetail(id) {
    setProject((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    })
  }

  function onAddproject(projectData) {
    setProject((prevState) => {
      const newData = {
        ...projectData,
        id: Math.random(),
      }

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newData],
      }
    })
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <Slider
        onStart={handleStart}
        projects={project.projects}
        onSelectProject={handleTaskDetail}
      />
      {content}
    </main>
  )
}

export default App
