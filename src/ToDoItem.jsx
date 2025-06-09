export default function ToDoItem({task, index, handleDelete, handleChecked}) {
  return (
    <>
      <li key={index} className="task-item">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={(e) => handleChecked(task, e)}
          id={task.text}
        />
        <label htmlFor={task.text}>{task.text}</label>
        <button
          className="btn delete-btn"
          onClick={(e) => handleDelete(task, e)}
        >
          Delete
        </button>
      </li>
    </>
  );
}
