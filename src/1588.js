var sumOddLengthSubarrays = function (arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const arr2 = [];
    for (let j = i; j < arr.length; j++) {
      arr2.push(arr[j]);
      if (arr2.length % 2 !== 0) {
        count = count + arr2.reduce((a, b) => a + b);
      }
    }
  }
  return count;
};
