import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const DeleteProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    console.log("Project Deleted:", id);
    // Add API call to delete the project
    navigate("/projects"); // Redirect back to projects list
  };

  return (
    <div className="delete-project">
      <h2>Are you sure you want to delete this project?</h2>
      <button onClick={handleDelete}>Yes, Delete</button>
      <button onClick={() => navigate("/projects")}>Cancel</button>
    </div>
  );
};

export default DeleteProject;
