// Importing modules & Initialize your application

const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose'); // Optional 



// Use middleware

app.use(express.json());

// Store tasks in memory

let tasks = [
  { id: "1", title: "Buy groceries", description: "Get milk, eggs and bread" }
];

// BASIC CRUD OPERATIONS

// Create Task

app.post('/api/tasks', (req, res) => {
  const { title, description } = req.body;
  
  if (!title || !description) {
    return res.status(400).json({
      message: 'Title and Description are required'
    });
  }
  
  const newTask = {
    id: String(tasks.length + 1),
    title, 
    description,
    status: 'pending',
    createdAt: new Date()
  };
  
  tasks.push(newTask);
  
  res.status(201).json({
    message: "Task Created!",
    task: newTask
  });
});

// Read - Get all tasks

app.get('/api/tasks', (req, res) => {
  res.status(200).json({
    message: "Tasks retrieved successfully",
    count: tasks.length,
    tasks: tasks
  });
});

// Read - Get a single task

app.get('/api/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const task = tasks.find(t => t.id === taskId);
  
  if (!task) {
    return res.status(404).json({
      message: "Task not found"
    });
  }
  
  res.status(200).json({
    message: "Task retrieved successfully",
    task
  });
});

// Update Functionality

app.put('/api/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const { title, description } = req.body;
  
  if (!title || !description) {
    return res.status(400).json({
      message: 'Title and Description are required'
    });
  }
  
  // Find the task

  const task = tasks.find(t => t.id === taskId);
  
  if (!task) {
    return res.status(404).json({
      message: "Task not found"
    });
  }
  
  // Update the task

  task.title = title;
  task.description = description;
  task.updatedAt = new Date();
  
  res.status(200).json({
    message: "Task updated",
    task
  });
});

// Delete Functionality

app.delete('/api/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const taskIndex = tasks.findIndex(t => t.id === taskId);
  
  if (taskIndex === -1) {
    return res.status(404).json({
      message: "Task not found"
    });
  }
  
  // Delete Task From Array

  tasks.splice(taskIndex, 1);
  
  res.status(200).json({
    message: "Task Deleted"
  });
});

// Home route

app.get('/', (req, res) => {
  res.json({
    message: 'To-Do List API',
    endpoints: {
      getAllTasks: 'GET /api/tasks',
      getOneTask: 'GET /api/tasks/:id',
      createTask: 'POST /api/tasks',
      updateTask: 'PUT /api/tasks/:id',
      deleteTask: 'DELETE /api/tasks/:id'
    }
  });
});

// Start the server

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});