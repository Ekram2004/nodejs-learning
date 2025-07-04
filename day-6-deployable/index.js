// Load environment variables
// require("dotenv").config();
// console.log("✅ Checking .env: MONGODB_URI =", process.env.MONGODB_URI);

require("dotenv").config();
console.log("✅ MONGODB_URI =", process.env.MONGODB_URI);

// Import required packages
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Define the task schema
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

// Create the Task model
const Task = mongoose.model("Task", TaskSchema);

// Routes

// Create a task
app.post("/tasks", async (req, res) => {
  try {
    const { title } = req.body;
    const task = await Task.create({ title });
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all tasks
app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Update a task
app.put("/tasks/:id", async (req, res) => {
  const { title, completed } = req.body;
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { title, completed },
      { new: true }
    );
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a task
app.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});



// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
