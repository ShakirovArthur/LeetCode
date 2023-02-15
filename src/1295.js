var findNumbers = function (nums) {
  let count = 0;
  nums.forEach((item) => {
    const val = item.toString();
    if (val.length % 2 === 0) {
      count = count + 1;
    }
  });
  return count;
};
