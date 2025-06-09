import "./app.css";
import TaskInputForm from "./TaskInputForm.jsx";
import ToDoList from "./ToDoList.jsx";
import {useEffect, useState} from "react";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const localValue = localStorage.getItem("TASKS");
    if(localValue === null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("TASKS", JSON.stringify(tasks));
  }, [tasks])

  return (
    <>
      <TaskInputForm tasks={tasks} setTasks={setTasks} />
      <ToDoList tasks={tasks} setTasks={setTasks}/>
    </>
  );
}
