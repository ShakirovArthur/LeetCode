function majorityElement(nums: number[]): number {
  interface Object {
    [key: number]: number;
  }
  let hashMap: Object = {};

  nums.forEach((item) => {
    if (hashMap[item]) {
      hashMap[item]++;
    } else {
      hashMap[item] = 1;
    }
  });
  let result: number = 0;
  let maxValue: number = 0;
  for (let key in hashMap) {
    if (hashMap[key] > maxValue) {
      maxValue = hashMap[key];
      result = Number(key);
    }
  }
  return result;
}
