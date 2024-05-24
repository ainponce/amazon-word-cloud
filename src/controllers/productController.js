import { getProductDescription } from '../services/productService';

const getProductData = async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send('URL is required');
  }

  try {
    const data = await getProductDescription(url);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to fetch product description');
  }
};

export default { getProductData };
