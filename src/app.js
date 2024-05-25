import express from 'express';
import productController from './controllers/productController.js';

const app = express();
const port = 8080;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the product info service!');
});

app.get('/productInfo', async (req, res) => {
    await productController.getProductData(req, res);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
