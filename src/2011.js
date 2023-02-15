var finalValueAfterOperations = function (operations) {
  let sum = 0;
  for (let i of operations) {
    if (i.includes("--")) {
      sum = sum - 1;
    } else {
      sum = sum + 1;
    }
  }
  return sum;
};
