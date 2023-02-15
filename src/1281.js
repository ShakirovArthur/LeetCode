var subtractProductAndSum = function (n) {
  let str = String(n);
  let arr = str.split("");
  let sum = 0;
  let product = 1;
  let result = 0;
  arr.forEach(function (item) {
    product = product * Number(item);
  });

  arr.forEach(function (item, i) {
    sum = sum + Number(item);
  });
  result = product - sum;
  return result;
};
