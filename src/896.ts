function isMonotonic(nums: number[]): boolean {
  let up: boolean = true;
  let down: boolean = true;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) {
      down = false;
    } else if (nums[i] > nums[i + 1]) {
      up = false;
    }
  }

  return up || down;
}
