import {useState} from "react";

export default function TaskInputForm({tasks, setTasks}) {
  const [task, setTask] = useState('');

  function handleInputTask(e) {
    e.preventDefault();
    setTask(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (task.trim() === "") {
      alert("Please enter a task.");
      return;
    } else if(tasks.some(t => t.text.toLowerCase() === task.toLowerCase())) {
      alert("Task already exists.");
      setTask('');
      return;
    } else {
      setTasks((prevTasks) => [...prevTasks, { text: task, completed: false}]);
      setTask('');
    }
  }

  return(
    <>
      <h1>ToDo List</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task" className="input-label">
          <span>New Task:</span>
          <input
            type="text"
            id="task"
            name="task"
            autoComplete="off"
            value={task}
            onInput={handleInputTask}
          />
        </label>
        <button type="submit" className="btn">
          Add Task
        </button>
      </form>
    </>
  )
}