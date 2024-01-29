import { useEffect, useState } from "react";
import styles from "./styelModules/tasks.module.css";
export function Tasks() {
  const [tasks, setTasks] = useState([]);

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

  return (
    <div className={styles.taskBox}>
      {tasks.map((task) => (
        <SingleTask key={task.id} task={task} />
      ))}
    </div>
  );
}
function computeStatusColor(status) {
  console.log(status);
  switch (status) {
    case "incomplete":
      return styles.incomplete;
    case "in progress":
      return styles.progress;
    case "planned":
      return styles.planned;
    case "completed":
      return styles.completed;
  }
}

function SingleTask({ task }) {
  return (
    <div className={styles.task}>
      {/*<p>{task.id}</p>*/}
      <h2 className={styles.title}>{task.title}</h2>
      <div className={styles.statusBox}>
        <p className={styles.description}>{task.description}</p>
        <div
          className={`${styles.status} ${computeStatusColor(task.status)}`}
        ></div>
      </div>
    </div>
  );
}
