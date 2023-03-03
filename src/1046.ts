function lastStoneWeight(stones: number[]): number {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a);

    let first: any = stones.shift();
    let second: any = stones.shift();

    if (first !== second) {
      stones.push(first - second);
    }
  }
  if (stones.length === 0) {
    return 0;
  }

  return stones[0];
}
