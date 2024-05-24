import axios from 'axios';

const productUrl = 'http://www.amazon.com/gp/product/B00VVOCSOU';

(async () => {
  try {
    const response = await axios.get(productUrl);
    console.log(response.data);
  } catch (error) {
    console.error('Failed to fetch:', error);
  }
})();