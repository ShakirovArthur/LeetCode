var twoSum = function (nums, target) {
  const arr = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      sum = nums[i] + nums[j];

      if (sum === target) {
        arr.push(i, j);
      }
    }
  }
  return arr;
};
