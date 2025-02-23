import React, { useState } from "react";
import { useParams } from "react-router-dom";

const EditTask = () => {
  const { id } = useParams();
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task Updated:", { id, taskName, description });
    // API call to update the task
  };

  return (
    <div className="edit-task">
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Task Name:</label>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Enter task name"
          required
        />

        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
          required
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditTask;