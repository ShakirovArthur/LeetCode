function containsDuplicate(nums: number[]): boolean {
  const sortedNums = nums.sort();
  let result = false;
  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] === sortedNums[i + 1]) {
      result = true;
    }
  }
  return result;
}
