const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Set up your routes and other middleware here...

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// Define a new route handler for the home page
app.get('/', (req, res) => {
    res.send('Hello, world!');
  });
  app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
// Serve static files from the public directory
app.use(express.static('public'));