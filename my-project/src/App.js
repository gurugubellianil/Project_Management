import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Layout from "./components/Layout";
import "./styles/global.css";
import CreateProject from "./pages/CreateProject";
import EditProject from "./pages/EditProject";
import DeleteProject from "./pages/DeleteProject";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";
import DeleteTask from "./pages/DeleteTask";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Layout />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/create" element={<CreateProject />} />
            <Route path="/projects/edit/:id" element={<EditProject />} />
            <Route path="/projects/delete/:id" element={<DeleteProject />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/tasks/create" element={<CreateTask />} />
            <Route path="/tasks/edit/:id" element={<EditTask />} />
            <Route path="/tasks/delete/:id" element={<DeleteTask />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
