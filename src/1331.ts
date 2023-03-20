function arrayRankTransform(arr: number[]): number[] {
  let clone: number[] = [...new Set([...arr].sort((a, b) => a - b))];
  let result: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(clone.indexOf(arr[i]) + 1);
  }
  return result;
}
