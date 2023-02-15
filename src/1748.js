var sumOfUnique = function (nums) {
  let obj = {};
  nums.forEach((item) => {
    if (obj[item]) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  });
  let result = 0;
  for (let key in obj) {
    if (obj[key] === 1) {
      result += Number(key);
    }
  }
  return result;
};
