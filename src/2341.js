var numberOfPairs = function (nums) {
  const sortNums = nums.sort();
  let count = 0;
  let result = [];
  for (let i = 0; i < sortNums.length; i++) {
    if (sortNums[i] === sortNums[i + 1]) {
      count++;
      sortNums.splice(i, 2);
      i -= 1;
    } else {
      result.push(sortNums[i]);
      sortNums.shift();
      i -= 1;
    }
  }
  return [count, result.length];
};
