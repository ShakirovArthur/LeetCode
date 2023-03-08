function splitNum(num: number): number {
  let arr: number[] = [...num.toString()].map(Number);
  arr = arr.sort((a, b) => a - b);

  let nums1: string = "";
  let nums2: string = "";

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      nums1 += arr[i];
    } else {
      nums2 += arr[i];
    }
  }

  return Number(nums1) + Number(nums2);
}
