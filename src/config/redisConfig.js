const { createClient } = require('@redis/client');
const redisClient = createClient();

redisClient.on('error', (err) => {
  console.error('Redis client error', err);
});

(async () => {
  await redisClient.connect();
})();

module.exports = redisClient;