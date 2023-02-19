function intersection(nums1: number[], nums2: number[]): number[] {
  const result: Array<number> = [];

  nums1.forEach((item) => {
    if (nums2.includes(item) && !result.includes(item)) {
      result.push(item);
    }
  });

  return result;
}
