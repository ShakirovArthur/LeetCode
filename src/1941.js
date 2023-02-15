var areOccurrencesEqual = function (s) {
  const a = s.split("");
  let obj = {};
  a.forEach((item) => {
    if (obj[item] === undefined) {
      obj[item] = 1;
    } else {
      obj[item] = obj[item] + 1;
    }
  });
  const count = obj[s[0]];

  for (let value in obj) {
    if (count !== obj[value]) {
      return false;
    }
  }
  return true;
};
