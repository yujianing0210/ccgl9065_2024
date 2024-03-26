const express = require('express');
const app = express();

// Add server configuration and routes here

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

const studentsData = require('./src/studentsData.json');

// API endpoint to fetch student works
app.get('/api/students', (req, res) => {
  res.json(studentsData);
});