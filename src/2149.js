var rearrangeArray = function (nums) {
  const pos = nums.filter((x) => x >= 0);
  const neg = nums.filter((x) => x < 0);
  const res = [];

  for (let i = 0; i < nums.length / 2; i++) {
    res.push(pos[i], neg[i]);
  }
  return res;
};
