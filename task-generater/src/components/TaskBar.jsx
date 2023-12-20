import React, { useState } from 'react'

const TaskBar = (props) => {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask])
      setNewTask('')
    }
  }

  return (
    <div>
      <h1>{props.name}</h1>
      <p>Description</p>
      <p>{props.description}</p>
      <p>{props.date}</p>

      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  )
}

export default TaskBar
