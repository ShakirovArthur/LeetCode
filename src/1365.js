var smallerNumbersThanCurrent = function(nums) {
let nums2 = [];
let count = 0;
for (let i of nums) {
  count = 0;
  for (let j of nums) {
    if (i > j) {
      count = count + 1;
    }
  }
  nums2.push(count);
}
    return nums2;
    
};
