const http = require('http');

const server = http.createServer((req, res) => {
    // Logging request method and URL
    console.log(`Request received: ${req.method} ${req.url}`);

    // Handling routes
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to our site!');
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is a simple HTTP server in Node.js for demonstration purposes by Ehsan Hashmi.');
    } else {
        // Handling non-existing routes
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
