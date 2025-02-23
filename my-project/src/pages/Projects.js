import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    { id: 1, name: "Project Alpha", description: "An AI-based project." },
    { id: 2, name: "Project Beta", description: "Web development project." },
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      <Link to="/projects/create">
        <button>Create New Project</button>
      </Link>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>{project.description}</td>
              <td>
                <Link to={`/projects/edit/${project.id}`}>
                  <button>Edit</button>
                </Link>
                <Link to={`/projects/delete/${project.id}`}>
                  <button style={{ background: "#dc2626" }}>Delete</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Projects;
