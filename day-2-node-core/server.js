const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.sendDate('Hello from Node.js server!');
});

server.listen(3000, () => {
    console.log(' http://localhost:3000');
});
