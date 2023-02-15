var countPrefixes = function (words, s) {
  let count = 0;
  words.forEach((item) => {
    if (s.startsWith(item)) {
      count += 1;
    }
  });
  return count;
};
