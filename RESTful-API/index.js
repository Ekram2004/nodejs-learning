const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const Task = require('./models/task');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connect sucessusfuly'))
    .catch((err) => console.error('MongoDB connection error ', err));
// POST CREATE NE TASKS

app.post('/tasks', async (req, res) => {
    try {
        const task = new Task(req.body);
        const saved = await task.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

app.delete('/tasks/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.patch('/tasks/:id', async (req, res) => {
    try {
        const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});