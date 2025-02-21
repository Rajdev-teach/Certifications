const express = require('express');
const path = require('path');

const app = express();
const port = 3000;  // You can change this to any port you'd like

// Serve static files (CSS, JS, images) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html when accessing the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});