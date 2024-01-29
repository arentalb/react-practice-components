import { useEffect, useState } from "react";
import styles from "./styelModules/tasks.module.css";
import { useNavigate, useParams } from "react-router-dom";

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

export function TaskView() {
  const data = useParams();
  const { id } = data;
  const [task, setTask] = useState({});

  useEffect(function () {
    async function fetchTasks() {
      try {
        const res = await fetch(`http://localhost:3001/tasks/${id}`);
        const data = await res.json();
        setTask(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchTasks();
  }, []);
  const navigate = useNavigate();

  const handleButtonClick = async (taskId) => {
    try {
      const response = await fetch(`http://localhost:3001/tasks/${taskId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log(`Task with ID ${taskId} deleted successfully`);
        navigate("/tasks");
      } else {
        console.error("Failed to delete task");
      }
    } catch (error) {
      console.error("Error while deleting task:", error);
    }
  };

  return (
    <div className={`${styles.task} ${styles.button}`}>
      <h2 className={styles.title}>{task.title}</h2>
      <div className={styles.statusBox}>
        <p className={styles.description}>{task.description}</p>
        <div
          className={`${styles.status} ${computeStatusColor(task.status)}`}
        ></div>
      </div>
      <button
        onClick={() => handleButtonClick(task.id)}
        className={styles.deleteButton}
      >
        delete
      </button>
    </div>
  );
}
