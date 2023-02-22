function divideArray(nums: number[]): boolean {
  const arr = nums.sort((a, b) => b - a);

  let pairs: number = nums.length / 2;

  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] === arr[i + 1]) {
      pairs--;
    }
  }

  return !pairs;
}
