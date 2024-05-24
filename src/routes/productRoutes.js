import { Router } from 'express';
import { getProductData } from '../controllers/productController.js'; 

const router = Router();

router.get('/productUrl', getProductData);

export default router;