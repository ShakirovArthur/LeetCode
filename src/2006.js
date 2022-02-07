let nums = [1, 2, 2, 1];
const k = 1;
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  for (let j = 0; j < nums.length; j++) {
    if (nums[i] - nums[j] === k) {
      sum++;
    }
  }
}
console.log(sum);
