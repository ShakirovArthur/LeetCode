function isHappy(n: number): boolean {
  let repeat: number[] = [];
  function isHappyNumber(n: number, repeat: number[]): boolean {
    const sumOfSquares = String(n)
      .split("")
      .map((x: any) => Number(x * x))
      .reduce((a, b) => a + b, 0);
    if (sumOfSquares === 1) {
      return true;
    } else if (repeat.includes(sumOfSquares)) {
      return false;
    } else {
      repeat.push(sumOfSquares);
      return isHappyNumber(sumOfSquares, repeat);
    }
  }
  return isHappyNumber(n, repeat);
}
