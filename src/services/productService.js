const axios = require('axios');
const cheerio = require('cheerio');
const { removeStopwords } = require('stopword');
const { getCachedData, setCachedData } = require('../utils/cacheUtils');
const { calculateWordFrequency } = require('../utils/wordUtils');

const getProductDescription = async (url) => {
  const cachedData = await getCachedData(url);
  
  if (cachedData) {
    return JSON.parse(cachedData);
  }

  const response = await axios.get(url);
  const $ = cheerio.load(response.data);
  const description = $('div#productDescription p span').text().trim();
  const words = description.split(/\W+/).map(word => word.toLowerCase());
  const filteredWords = removeStopwords(words);
  const wordFrequency = calculateWordFrequency(filteredWords);

  await setCachedData(url, JSON.stringify(wordFrequency));
  return wordFrequency;
};

module.exports = { getProductDescription };
