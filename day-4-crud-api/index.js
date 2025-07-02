const express = require('express');
const app = express();

app.use(express.json());

const tasks = [];
// POST Add a new Task

app.post('/tasks', (req, res) => {
    const { title } = req.body;
    if (!title)
        res.status(404).json({ error: 'Title is required' });
    const newTask = {
        id: tasks.length + 1,
        title,
        completed: false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});
// Get (Get all tasks)

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Put (Update tasks)

app.put("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const { title, completed } = req.body;

  const task = tasks.find((t) => t.id === taskId);
  if (!task) return res.status(404).json({ error: "Task not found" });

  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;

  res.json(task);
});

app.delete("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter((t) => t.id !== taskId);

  res.json({ message: "Task deleted successfully" });
});


app.listen(3000, () => {
    console.log('server is running......');
});