import client from '../config/redisConfig.js';

const getCachedData = async (key) => {
  try {
    const data = await client.get(key);
    return data;
  } catch (err) {
    throw new Error(`Error getting cached data: ${err.message}`);
  }
};

const setCachedData = async (key, value, expiry = 3600) => {
  try {
    await client.set(key, value, {
      EX: expiry,
    });
  } catch (err) {
    throw new Error(`Error setting cached data: ${err.message}`);
  }
};

export default { getCachedData, setCachedData };
