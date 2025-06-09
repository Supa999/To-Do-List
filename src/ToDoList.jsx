import ToDoItem from './ToDoItem.jsx';

export default function ToDoList({ tasks, setTasks }) {

  function handleDelete(taskToDelete, e) {
    e.preventDefault();
    setTasks((prevTasks) => prevTasks.filter((t) => t !== taskToDelete));
  }

  function handleChecked(completedTask, e) {
    setTasks((currentTasks) => {
      return(
        currentTasks.map(task => {
          if(task.id === completedTask.id) {
            return { ...task, completed: e.target.checked };
          }
        })
      )
    })
  }
  return(
    <>
      <ul>
        {tasks.length === 0 && <h2>No Tasks to do</h2>}
        {tasks.map((task, index) => {
          return(
            <ToDoItem key={index} task={task} handleDelete={handleDelete} handleChecked ={handleChecked}  />
          )
        })}
      </ul>
    </>
  )
}