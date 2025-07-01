const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is working');
});

// Route with URL params

app.get('/greet/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}`);
})

// Route with Query params

app.get('/search', (req, res) => {
    const keyword = req.query.q;
    res.send(`You searched for:${keyword} `);
})

// Route with JSON Body (POST Method);

app.post("/api/user", (req, res) => {
  const { name, age } = req.body;
  res.json({ message: `User ${name} is ${age} years old.` });
});

// Midlware
app.use((req, res, next) => {
    console.log(`Request: ${req.method} ${req.url}`);
    next();
});

app.listen(3000, () => {
    console.log('server is running http://localhost:3000');
});
