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
    task: {},
  })

  function handletask(text) {
    setProject((prevState) => {
      const taskId = Math.random()
      const taskData = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      }

      const updatedTasks = {
        ...prevState.task,
        [prevState.selectedProjectId]: [
          taskData,
          ...(prevState.task[prevState.selectedProjectId] || []),
        ],
      }

      return {
        ...prevState,
        task: updatedTasks,
      }
    })
  }

  function handlecanceltask(id) {
    setProject((prevState) => {
      const updatedTasks = {
        ...prevState.task,
        [prevState.selectedProjectId]: (
          prevState.task[prevState.selectedProjectId] || []
        ).filter((task) => task.id !== id),
      }

      return {
        ...prevState,
        task: updatedTasks,
      }
    })
  }

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

  function handleDelete() {
    if (
      project.selectedProjectId !== null &&
      project.selectedProjectId !== undefined
    ) {
      const updatedProjects = project.projects.filter(
        (proj) => proj.id !== project.selectedProjectId
      )

      setProject((prevState) => ({
        ...prevState,
        selectedProjectId: undefined,
        projects: updatedProjects,
      }))
    }
  }

  const selectedProject = project.projects.find(
    (proj) => proj.id === project.selectedProjectId
  )

  let content = (
    <TaskDetail
      project={selectedProject}
      onDelete={handleDelete}
      onAddTask={handletask}
      onDeleteTask={handlecanceltask}
      tasks={project.task[project.selectedProjectId] || []}
    />
  )

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
        selectedProjectId={project.selectedProjectId}
      />
      {content}
    </main>
  )
}

export default App
