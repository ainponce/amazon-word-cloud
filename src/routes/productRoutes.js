import { Router } from 'express';
import { getProductData } from '../controllers/productController';

const router = Router();

router.get('/productUrl', getProductData);

export default router;
