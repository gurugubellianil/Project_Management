const Project = require('../models/Project');

const getProjects = async (req, res) => {
    const projects = await Project.find({ user: req.user.id });
    res.json(projects);
};

const createProject = async (req, res) => {
    const { name, description } = req.body;
    const project = await Project.create({ name, description, user: req.user.id });
    res.status(201).json(project);
};

module.exports = { getProjects, createProject };
