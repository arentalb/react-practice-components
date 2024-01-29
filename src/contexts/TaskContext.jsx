import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});

  useEffect(function () {
    async function fetchTasks() {
      try {
        const res = await fetch("http://localhost:3001/tasks");
        const data = await res.json();
        setTasks(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchTasks();
  }, []);

  async function getTask(id) {
    try {
      const res = await fetch(`http://localhost:3001/tasks/${id}`);
      const data = await res.json();
      setTask(data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <TaskContext.Provider
      value={{ tasks: tasks, task: task, getTask: getTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}
function useTask() {
  const context = useContext(TaskContext);
  if (context === undefined)
    throw new Error("TaskContext was used outside the TaskProvider");
  return context;
}
export { TaskProvider, useTask };
