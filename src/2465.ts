function distinctAverages(nums: number[]): number {
  let sortNums: number[] = nums.sort((a, b) => a - b);
  let averages: number[] = [];

  while (sortNums.length > 0) {
    let minNums: number = sortNums.shift()!; //сообщаем компилятору что minNums не может быть нулевым
    let maxNums: number = sortNums.pop()!;
    averages.push((minNums + maxNums) / 2);
  }
  let result: number = 0;
  averages = averages.sort((a, b) => a - b);
  for (let i = 0; i < averages.length; i++) {
    if (averages[i] !== averages[i + 1]) {
      result++;
    }
  }
  return result;
}
