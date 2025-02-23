import React, { useState } from "react";

const CreateProject = () => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Project Created:", { projectName, description });
    setProjectName("");
    setDescription("");
  };

  return (
    <div className="create-project">
      <h2>Create Project</h2>
      <form onSubmit={handleSubmit}>
        <label>Project Name:</label>
        <input
          type="text"
          placeholder="Enter project name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        />

        <label>Description:</label>
        <textarea
          placeholder="Enter project description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateProject;
