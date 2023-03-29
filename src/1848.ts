function getMinDistance(nums: number[], target: number, start: number): number {
  let result: number = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target && Math.abs(i - start) < result) {
      result = Math.abs(i - start);
    }
  }
  return result;
}
