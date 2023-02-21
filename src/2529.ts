function maximumCount(nums: number[]): number {
  let pos: number = 0;
  let neg: number = 0;

  nums.forEach((item) => {
    if (item > 0) {
      pos++;
    }
    if (item < 0) {
      neg++;
    }
  });

  if (pos > neg) {
    return pos;
  }
  return neg;
}
