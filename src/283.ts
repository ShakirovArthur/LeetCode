function moveZeroes(nums: number[]): void {
  nums.forEach((num: number) => {
    if (num === 0) {
      nums.splice(nums.indexOf(num), 1);
      nums.push(num);
    }
  });
}
