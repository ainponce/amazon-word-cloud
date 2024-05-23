const express = require('express');
const productRoutes = require('./routes/productRoutes');

const app = express();
const port = 8080;

app.use('/', productRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});