function missingNumber(nums: number[]): number {
  const sortNums: number[] = nums.sort((a, b) => a - b);

  for (let i = 0; i < sortNums.length; i++) {
    if (sortNums[i] !== i) {
      return i;
    }
  }

  return sortNums.length;
}
