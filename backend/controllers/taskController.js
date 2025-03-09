const Task = require('../models/Task');

const getTasks = async (req, res) => {
    const tasks = await Task.find({ project: req.params.projectId });
    res.json(tasks);
};

const createTask = async (req, res) => {
    const { title, description, status } = req.body;
    const task = await Task.create({ title, description, status, project: req.params.projectId });
    res.status(201).json(task);
};

module.exports = { getTasks, createTask };
