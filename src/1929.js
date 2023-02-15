var getConcatenation = function (nums) {
  const nums2 = [];
  for (let i of nums) {
    nums2.push(i);
  }
  for (let i of nums) {
    nums2.push(i);
  }
  return nums2;
};
