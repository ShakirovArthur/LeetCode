function maxAscendingSum(nums: number[]): number {
  let sum: number = 0;
  let result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= nums[i + 1]) {
      result.push(sum + nums[i]);
      sum = 0;
    } else {
      sum += nums[i];
    }
  }
  result.push(sum);

  return Math.max(...result);
}
