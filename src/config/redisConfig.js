import redis from '@redis/client';

const redisClient = redis.createClient();

redisClient.on('error', (err) => {
  console.error('Redis client error', err);
});

(async () => {
  await redisClient.connect();
})();

export default redisClient;