import React from "react";
import { Link } from "react-router-dom";
import "../styles/Tasks.css";

const Tasks = () => {
  const tasks = [
    { id: 1, name: "Design Homepage", project: "Website Redesign" },
    { id: 2, name: "Fix Login Bug", project: "App Development" },
    { id: 3, name: "Update API Docs", project: "Backend Refactor" },
  ];

  return (
    <div className="tasks-container">
      <div className="tasks-header">
        <h2>Tasks</h2>
        <Link to="/tasks/create">
          <button className="add-task-btn">+ Create New Task</button>
        </Link>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <span className="task-title">
              {task.name} <small>({task.project})</small>
            </span>
            <div className="task-actions">
              <Link to={`/tasks/edit/${task.id}`}>
                <button className="edit-btn">Edit</button>
              </Link>
              <Link to={`/tasks/delete/${task.id}`}>
                <button className="delete-btn">Delete</button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
