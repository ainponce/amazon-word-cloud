import { Router } from 'express';
import productController from '../controllers/productController.js';

const router = Router();

router.get('/', (req, res) => {
    res.send('Welcome to the product info service!');
});

router.post('/productInfo', async (req, res) => {
    await productController.getProductData(req, res);
});

router.get('/productInfo', async (req, res) => {
    await productController.getProductData(req, res);
});

export default router;