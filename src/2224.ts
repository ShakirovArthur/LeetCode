function convertTime(current: string, correct: string): number {
  let currTime: number =
    Number(current.split(":")[0]) * 60 + Number(current.split(":")[1]);
  const corrTime: number =
    Number(correct.split(":")[0]) * 60 + Number(correct.split(":")[1]);

  let count: number = 0;

  while (currTime < corrTime) {
    if (corrTime >= currTime + 60) {
      currTime += 60;
    } else if (corrTime >= currTime + 15) {
      currTime += 15;
    } else if (corrTime >= currTime + 5) {
      currTime += 5;
    } else if (corrTime >= currTime + 1) {
      currTime += 1;
    }
    count += 1;
  }
  return count;
}
