var decompressRLElist = function (nums) {
  let out = [];
  for (let i = 0; i < nums.length; i = i + 2) {
    for (let j = 0; j < nums[i]; j++) {
      out.push(nums[i + 1]);
    }
  }
  return out;
};
