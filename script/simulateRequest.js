const axios = require('axios');

const url = 'http://localhost:8080/productUrl';
const productUrl = 'http://www.amazon.com/gp/product/B00VVOCSOU';
const requests = 10;

(async () => {
    try {
      const response = await axios.get(productUrl);
      console.log(response.data);
    } catch (error) {
      console.error('Failed to fetch:', error);
    }
})();