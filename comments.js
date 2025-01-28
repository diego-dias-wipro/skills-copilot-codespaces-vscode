// Create web server and listen on port 3000
// This is the main file that runs the web server
// The server listens on port 3000 and serves the static files and API requests
// The server is created using express.js
// The server uses the comments.js file to handle API requests
// The server uses the comments.html file to display the comments

// Import express.js
const express = require('express');
// Import comments.js
const comments = require('./comments');
// Import fs module
const fs = require('fs');
// Import path module
const path = require('path');

// Create the express application
const app = express();

// Serve static files
app.use(express.static('public'));

// Use comments.js to handle API requests
app.use('/api/comments', comments);

// Use comments.html to display the comments
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'comments.html'));
});

// Create a web server and listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});