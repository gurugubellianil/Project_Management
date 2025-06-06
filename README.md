# Project Management Tool

A full‐stack web application for managing projects, tasks, and teams. This repository contains:

- A **backend** folder (Node.js/Express API).
- A **my-project** folder (frontend React application).
- A PowerPoint presentation (`Project PPT.pptx`) describing the overall design and features.
- A `.vscode` folder with editor settings.

---

## Table of Contents

1. [Project Overview](#project-overview)  
2. [Folder Structure](#folder-structure)  
3. [Technologies Used](#technologies-used)  
4. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation](#installation)  
   - [Running the Backend](#running-the-backend)  
   - [Running the Frontend](#running-the-frontend)  
5. [Usage](#usage)  
6. [Project Presentation](#project-presentation)  
7. [Contributing](#contributing)  
8. [License](#license)  

---

## Project Overview

This repository implements a web‐based project management system. Users can:

- Create, assign, and track tasks.
- Manage teams and project workflows.
- View project statistics and timelines.

The backend exposes RESTful APIs for user authentication, project/task CRUD operations, and reporting. The frontend is a React‐based single‐page application that consumes those APIs and presents an interactive dashboard.

---

## Folder Structure

Project_Management/
├── .vscode/
│ └── settings.json # VS Code workspace settings (lint rules, editor prefs, etc.)
│
├── backend/
│ ├── controllers/ # Express route handlers (e.g., projects.js, tasks.js, users.js)
│ ├── models/ # Mongoose (or Sequelize) schemas/models
│ ├── routes/ # Route definitions (e.g., /api/projects, /api/auth)
│ ├── middlewares/ # Authentication, error handling, etc.
│ ├── config/ # DB connections, environment variables
│ ├── package.json # Backend dependencies and scripts
│ ├── server.js or app.js # Main Express app entry point
│ └── README.md # Backend‐specific instructions (if present)
│
├── my-project/
│ ├── public/ # Static assets (index.html, favicon, images)
│ ├── src/
│ │ ├── components/ # Reusable React components (Navbar, Dashboard, TaskCard)
│ │ ├── pages/ # Page‐level components (Home, Projects, Profile)
│ │ ├── services/ # API service modules (e.g., axios instances, authService.js)
│ │ ├── utils/ # Utility functions (date formatting, validation)
│ │ ├── App.js # React root component
│ │ ├── index.js # ReactDOM render, routing setup
│ │ └── styles/ # CSS or SCSS files
│ ├── package.json # Frontend dependencies and scripts
│ └── README.md # Frontend‐specific instructions (if present)
│
└── Project PPT.pptx # High‐level design and feature overview presentation


- **`.vscode/`**  
  Contains workspace settings such as formatting rules, recommended extensions, and debug configurations. You can ignore or customize these for your own editor.

- **`backend/`**  
  The server‐side application (likely Node.js + Express). Exposes REST endpoints under `routes/`. Connects to a database (e.g., MongoDB via Mongoose) defined in `models/`. Middleware (auth checks, error handlers) lives in `middlewares/`. Configuration files (e.g., `.env`, database URI) are stored in `config/`.

- **`my-project/`**  
  The client‐side React application. Uses functional components, React Router for navigation, and an HTTP client (e.g., Axios or fetch) to call backend APIs. Styles might be in plain CSS or a preprocessor.

---

## Technologies Used

- **Backend**  
  - Node.js  
  - Express.js  
  - MongoDB (with Mongoose) *or* SQL (with Sequelize)  
  - JWT (JSON Web Tokens) for authentication  
  - dotenv for environment variables  
  - (Any other middlewares: CORS, helmet, morgan, etc.)

- **Frontend**  
  - React  
  - React Router  
  - Axios (or fetch)  
  - CSS / SASS / CSS Modules (depending on implementation)  
  - Component library (optional, e.g., Material-UI, Chakra UI)  

- **Other**  
  - Git & GitHub for version control  
  - VS Code workspace settings in `.vscode/`  
  - Presentation created in PowerPoint (`.pptx`)

---

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14+ recommended)  
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)  
- [MongoDB](https://www.mongodb.com/) (if using MongoDB) or appropriate SQL server  
- [Git](https://git-scm.com/)  

### Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/gurugubellianil/Project_Management.git
   cd Project_Management
   Setup the Backend
2. **Setup the Backend**
cd backend
# if using npm
npm install
# or if using Yarn
# yarn install

**Create a .env file (if not already present) with at least:**
ini
Copy
Edit
PORT=5000
MONGO_URI=<your-mongo-connection-string>
JWT_SECRET=<your-jwt-secret>

**Other environment variables (e.g., SMTP settings) can be added as needed.**

3. Setup the Frontend
cd ../my-project
npm install
# or
# yarn install

**Running the Backend**
From within the backend/ folder:

# For development (with auto-restart via nodemon, if configured):
npm run dev

# Or for production:
npm start
By default, the server will run at http://localhost:5000 (or the port set in .env). Ensure your database server is running and that MONGO_URI (or equivalent) is correct.

**Running the Frontend**
From within the my-project/ folder:

npm start
This will launch the React app in development mode on http://localhost:3000 by default. It should automatically open a browser window; if not, navigate to http://localhost:3000.

The React app expects the backend API to be reachable at the configured base URL (e.g., http://localhost:5000/api). If the frontend has a proxy field in its package.json, it should forward API calls automatically to the backend.

**Usage**

**1. Register / Login**
On first launch, create an admin or project manager account.

**2. Create a New Project**
Navigate to “Projects” → “Create Project”
Fill in project details (name, description, start date, due date).

**3. Manage Tasks**
Within a project, click “Add Task”
Assign tasks to team members, set priority and deadlines.
Update task status (e.g., To Do → In Progress → Done).

**4. View Dashboard**
Real‐time overview of ongoing projects, upcoming deadlines, and team workload.
Charts or Kanban board (depending on implementation).

**5. Team Management**
Invite or add team members.
Assign roles (Admin, Project Manager, Developer).
Manage permissions (who can edit, view, or delete tasks).

**6. API Endpoints (examples)**
POST   /api/auth/register       # Register new user
POST   /api/auth/login          # Log in user
GET    /api/projects            # List all projects
POST   /api/projects            # Create a project
GET    /api/projects/:id        # Get project details
PUT    /api/projects/:id        # Update project
DELETE /api/projects/:id        # Delete project
GET    /api/tasks               # List all tasks (with filters)
POST   /api/tasks               # Create a task
PUT    /api/tasks/:id           # Update a task
DELETE /api/tasks/:id           # Delete a task
