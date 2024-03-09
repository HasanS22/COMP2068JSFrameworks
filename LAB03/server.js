// server.js

// Import required modules
const express = require('express');
const { parse } = require('url');

// Create an Express app
const app = express();
const port = 3000;

// Define a function to calculate the result
function calculate(method, x, y) {
    switch (method) {
        case 'add':
            return x + y;
        case 'subtract':
            return x - y;
        case 'multiply':
            return x * y;
        case 'divide':
            return x / y;
        default:
            throw new Error('Invalid method. Please use "add", "subtract", "multiply", or "divide".');
    }
}

// Define a route to handle requests
app.get('/lab2', (req, res) => {
    const { query } = parse(req.url, true);
    const { method, x, y } = query;

    try {
        const result = calculate(method, parseFloat(x), parseFloat(y));
        res.send(`${x} ${method} ${y} = ${result}`);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

