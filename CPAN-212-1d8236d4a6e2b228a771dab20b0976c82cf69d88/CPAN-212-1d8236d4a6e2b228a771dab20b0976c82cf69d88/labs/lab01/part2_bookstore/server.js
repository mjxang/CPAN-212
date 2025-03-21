const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// Helper function to send HTML files
const sendFile = (res, filePath) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
};

// Create server
const server = http.createServer((req, res) => {
  const url = req.url.toLowerCase(); // Normalize the URL for case-insensitive matching
  const method = req.method;

  if (method === 'GET') {
    switch (url) {
      case '/':
        sendFile(res, path.join(__dirname, 'pages', 'index.html'));
        break;
      case '/about':
        sendFile(res, path.join(__dirname, 'pages', 'about.html'));
        break;
      case '/contact':
        sendFile(res, path.join(__dirname, 'pages', 'contact.html'));
        break;
      default:
        sendFile(res, path.join(__dirname, 'pages', 'page-not-found.html'));
    }
  } else if (method === 'POST') {
    // Handle POST requests
    if (url === '/submit-form') {
      let body = '';

      // Gather the POST data
      req.on('data', (chunk) => {
        body += chunk.toString(); // Convert the buffer to a string
      });

      // End of data
      req.on('end', () => {
        console.log('Received POST data:', body);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Form submitted successfully!');
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('POST route not found');
    }
  } else {
    // Handle other HTTP methods
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
