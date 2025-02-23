import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "D:/web_ftend/my-project/src/styles/Layout.css";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button><br/>
      {isOpen && <h1 className="title">Project Management</h1>}
      <button className="dark-mode-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <ul className="nav-links">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
      </ul>
    </div>
  );
};

export default Layout;
