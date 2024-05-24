import redis from '@redis/client';

const redisClient = redis.createClient();

redisClient.on('error', (err) => {
  console.error('Redis client error', err);
}).connect();

export default redisClient;