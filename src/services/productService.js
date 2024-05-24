import { get } from 'axios';
import { load } from 'cheerio';
import { removeStopwords } from 'stopword';
import { getCachedData, setCachedData } from '../utils/cacheUtils';
import { calculateWordFrequency } from '../utils/wordUtils';

const getProductDescription = async (url) => {
  const cachedData = await getCachedData(url);

  if (cachedData) {
    return JSON.parse(cachedData);
  }

  const response = await get(url);
  const $ = load(response.data);
  const description = $('div#productDescription p span').text().trim();
  const words = description.split(/\W+/).map(word => word.toLowerCase());
  const filteredWords = removeStopwords(words);
  const wordFrequency = calculateWordFrequency(filteredWords);

  await setCachedData(url, JSON.stringify(wordFrequency));
  return wordFrequency;
};

export default { getProductDescription };
