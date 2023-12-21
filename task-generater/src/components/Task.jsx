import Newtask from './Newtask'

export default function Task({ task, onAdd, onDelete }) {
  return (
    <section>
      <Newtask onAdd={onAdd} />
      {task.length === 0 && (
        <p className='text-stone-800 mb-4'>this is not contain any tasks</p>
      )}
      {task.length > 0 &&
        task.map((task) => {
          return (
            <div
              key={task.id}
              className='flex justify-between items-center bg-stone-100 p-4 rounded-md mb-4'
            >
              <div className='flex items-center'>
                <input type='checkbox' className='mr-4' />
                <p className='text-stone-800'>{task.text}</p>
              </div>
              <button
                className='text-stone-800'
                onClick={() => onDelete(task.id)}
              >
                Delete
              </button>
            </div>
          )
        })}
    </section>
  )
}
