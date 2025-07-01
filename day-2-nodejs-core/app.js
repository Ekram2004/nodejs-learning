const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Express');
});
app.get('/api/greet', (req, res) => {
    res.json({ message: 'Hello, developers' });
});
app.listen(3000, () => {
    console.log('server is running http://localhost:3000');
});