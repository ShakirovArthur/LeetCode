function countNegatives(grid: number[][]): number {
  let negative: number = 0;

  grid.forEach((item) => {
    item.forEach((num) => {
      if (num < 0) {
        negative++;
      }
    });
  });

  return negative;
}
