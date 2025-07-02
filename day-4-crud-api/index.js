require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

mongoose
    .connect(process.env.MONGODB_URI, {
        userNewUrlParser: true,
        useUnifiedTopology: true,
    })
  .then(() => {
    console.log("connected to Mongoodb");
  })
  .catch((err) => {
    console.error("Mongoodb connecttion error ", err);
  });

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model("Task", TaskSchema);

app.post("/tasks", async (req, res) => {
  try {
    const { title } = req.body;
    const task = await Task.create({ title });
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.put("/tasks/:id", async (req, res) => {
  const { title, completed } = req.body;
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { title, completed },
      { new: true }
    );
    if (!task) return res.status(404).json({ error: "Task not found" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete("/tasks/:id", async (req, res) => {
  try {
    const result = await Task.findByIdAndDelete(req.params.id);
    if (!result) res.status(404).json({ error: "Task not found" });
    res.json({ message: "Task deleted sucessfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log("Server is running....");
});
