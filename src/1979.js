var findGCD = function (nums) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  let res = min;
  while (max % res !== 0 || min % res !== 0) {
    res = res - 1;
  }
  return res;
};
