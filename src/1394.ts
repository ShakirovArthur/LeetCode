function findLucky(arr: number[]): number {
  interface Object {
    [key: number]: number;
  }
  let objectWithNumbers: Object = {};

  arr.forEach((item) => {
    if (objectWithNumbers[item]) {
      objectWithNumbers[item]++;
    } else {
      objectWithNumbers[item] = 1;
    }
  });
  let result: number = 0;

  for (let key in objectWithNumbers) {
    if (Number(key) === objectWithNumbers[key]) {
      result = Number(key);
    }
  }

  return result !== 0 ? result : -1;
}
