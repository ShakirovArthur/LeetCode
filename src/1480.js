var runningSum = function(nums) {
let sum = 0;
let nums2 = [];
 for (let i of nums) {
      sum = sum + i;
      nums2.push(sum);
 }
 return nums2;
}
