const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/palin');
    res.end('Hello from Node js');
});

server.listen(3000, () => {
    console.log('server running on the http://localhost:3000');
});