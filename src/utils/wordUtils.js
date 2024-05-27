const calculateWordFrequency = (words) => {
  return words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});
};

export default { calculateWordFrequency };