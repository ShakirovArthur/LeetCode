var sortArrayByParityII = function (nums) {
  const odd = [];
  const even = [];

  nums.forEach((item) => {
    if (item % 2 === 0) {
      even.push(item);
    } else {
      odd.push(item);
    }
  });

  const result = [];

  while (odd.length > 0 && even.length > 0) {
    result.push(even.shift());
    result.push(odd.shift());
  }

  return result;
};
