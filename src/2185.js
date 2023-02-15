var prefixCount = function (words, pref) {
  let count = 0;
  words.forEach((item) => {
    if (item.startsWith(pref)) {
      count = count + 1;
    }
  });
  return count;
};
