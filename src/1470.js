var shuffle = function (nums, n) {
  let num1 = [];
  let num2 = [];
  let result = [];
  for (let i = 0; i < n; i++) {
    num1.push(nums[i]);
  }
  for (let i = n; i < nums.length; i++) {
    num2.push(nums[i]);
  }
  for (let i = 0; i < n; i++) {
    result.push(num1[i], num2[i]);
  }
  return result;
};
