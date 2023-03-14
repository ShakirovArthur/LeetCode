function addDigits(num: number): number {
  function sumOfNumbers(num: number): any {
    let splitOfNum = String(num)
      .split("")
      .map((item) => Number(item))
      .reduce((a, b) => a + b);
    if (splitOfNum >= 10) {
      return sumOfNumbers(splitOfNum);
    } else {
      return splitOfNum;
    }
  }
  return sumOfNumbers(num);
}
