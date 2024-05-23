const axios = require('axios');

const url = 'http://localhost:8080/productUrl';
const productUrl = 'http://www.amazon.com/gp/product/B00VVOCSOU';
const requests = 10; // Número de solicitudes a simular

(async () => {
  for (let i = 0; i < requests; i++) {
    try {
      const response = await axios.get(`${url}?url=${productUrl}`);
      console.log(response.data);
    } catch (error) {
      console.error('Failed to fetch:', error);
    }
  }
})();