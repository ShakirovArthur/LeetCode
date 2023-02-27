function arraySign(nums: number[]): number {
  let count: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      return 0;
      break;
    } else if (nums[i] < 0) {
      count++;
    }
  }

  return count % 2 === 0 ? 1 : -1;
}
