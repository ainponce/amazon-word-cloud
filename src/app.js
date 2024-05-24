import express from 'express';
//import productRoutes from './routes/productRoutes.js';

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});