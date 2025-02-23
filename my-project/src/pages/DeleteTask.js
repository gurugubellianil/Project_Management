import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const DeleteTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    console.log("Task Deleted:", id);
    // API call to delete the task
    navigate("/tasks");
  };

  return (
    <div className="delete-task">
      <h2>Are you sure you want to delete this task?</h2>
      <button onClick={handleDelete}>Yes, Delete</button>
      <button onClick={() => navigate("/tasks")}>Cancel</button>
    </div>
  );
};

export default DeleteTask;