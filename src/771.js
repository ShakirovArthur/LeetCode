var numJewelsInStones = function (jewels, stones) {
  let arr = jewels.split("");
  let arr2 = stones.split("");
  let sum = 0;
  for (let i of arr) {
    for (let k of arr2) {
      if (i === k) {
        sum = sum + 1;
      }
    }
  }
  return sum;
};
