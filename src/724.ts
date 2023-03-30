function pivotIndex(nums: number[]): number {
  let result: number = -1;
  let right: number = nums.reduce((a, b) => a + b);
  let left: number = 0;
  for (let i = 0; i < nums.length; i++) {
    right -= nums[i];
    if (right === left) {
      result = i;
      break;
    }
    left += nums[i];
  }
  return result;
}
