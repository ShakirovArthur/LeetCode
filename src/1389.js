var createTargetArray = function (nums, index) {
  let result = [];
  nums.forEach((item, i) => {
    const target = index[i];
    result.splice(target, 0, item);
  });
  return result;
};
