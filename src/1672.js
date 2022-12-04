var maximumWealth = function(accounts) {
    let max = 0;
 let sum = 0;
 for (let mass of accounts) {
     for (let num of mass) {
    sum = sum + num;
  }
  if (sum > max) {
    max = sum;
 }
   sum = 0;
 }
     return max;
};
