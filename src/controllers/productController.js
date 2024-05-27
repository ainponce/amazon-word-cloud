import productService from '../services/productService.js';

const getProductData = async (req, res) => {
  const { url } = req.query;
  
  if (!url) {
    return res.status(400).send('URL is required');
  }

  try {
    const data = await productService.getProductDescription(url);
    res.render('index', { data });
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to fetch product description');
  }
};

export default { getProductData };
