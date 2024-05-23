const redis = require('redis');
const client = redis.createClient();

client.on('error', (err) => {
  console.error('Redis error:', err);
});

const getCachedData = (key) => {
  return new Promise((resolve, reject) => {
    client.get(key, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const setCachedData = (key, value, expiry = 3600) => {
  return new Promise((resolve, reject) => {
    client.setex(key, expiry, value, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
};

module.exports = { getCachedData, setCachedData };
