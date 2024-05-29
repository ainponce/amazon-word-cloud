import axios from 'axios';
import cheerio from 'cheerio';
import stopword from 'stopword';
import wordUtils from '../utils/wordUtils.js';
import cacheUtils from '../utils/cacheUtils.js';

const getProductDescription = async (url) => {
  const cachedData = await cacheUtils.getCachedData(url);

  if (cachedData) {
    return JSON.parse(cachedData);
  }

  console.log(url)
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);
  // console.log(response.data)
  const description = $('div#productDescription p span').text().trim();
  // const description = `Enjoy The Creative Life with the TCL 40" 1080p direct LED HDTV. It delivers premium picture quality and tremendous value in a sophisticated slim frame design perfect for bringing entertainment to any space. This flat screen LED HDTV features High Definition 1080p resolution for a sharper image and TCL True Color Technology for brilliant color and contrast. With direct LED backlighting, view darker blacks and luminous brightness while maintaining the best standards in energy efficiency.`;
  const words = description.split(/\W+/).map(word => word.toLowerCase());
  const filteredWords = stopword.removeStopwords(words);
  const wordFrequency = (Object.entries(wordUtils.calculateWordFrequency(filteredWords)).filter(word => word[1] > 1));

  await cacheUtils.setCachedData(url, JSON.stringify(wordFrequency));

  return wordFrequency;
};

export default { getProductDescription };
