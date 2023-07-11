var differenceOfSum = function(nums) {
  const x = nums.reduce((a,b) => a + b);
  const y = nums.join('').split('').reduce((a,b) => a+parseInt(b),0);
  return x - y;
};
