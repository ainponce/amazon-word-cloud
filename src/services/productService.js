import axios from 'axios';
import cheerio from 'cheerio';
import stopword from 'stopword';
import cacheUtils from '../utils/cacheUtils.js';
import wordUtils from '../utils/wordUtils.js';

const getProductDescription = async (url) => {
  const cachedData = await cacheUtils.getCachedData(url);

  if (cachedData) {
    return JSON.parse(cachedData);
  }

  const response = await axios.get(url);
  const $ = cheerio.load(response.data);
  const description = $('div#productDescription p span').text().trim();
  const words = description.split(/\W+/).map(word => word.toLowerCase());
  const filteredWords = stopword.removeStopwords(words);
  const wordFrequency = wordUtils.calculateWordFrequency(filteredWords);

  await cacheUtils.setCachedData(url, JSON.stringify(wordFrequency));
  return wordFrequency;
};

export default { getProductDescription };
