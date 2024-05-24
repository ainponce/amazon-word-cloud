const express = require('express');
const productRoutes = require('./routes/productRoutes');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});