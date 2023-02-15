var numOfStrings = function (patterns, word) {
  let result = 0;
  patterns.forEach((item) => {
    if (word.includes(item)) {
      result++;
    }
  });
  return result;
};
