var uniqueOccurrences = function (arr) {
  let obj = {};
  arr.forEach((item) => {
    if (obj[item]) {
      obj[item] = obj[item] + 1;
    } else {
      obj[item] = 1;
    }
  });
  const uniqueValues = Object.values(obj);
  const uniqueSet = new Set(uniqueValues);
  if (uniqueSet.size === uniqueValues.length) {
    return true;
  } else {
    return false;
  }
};
