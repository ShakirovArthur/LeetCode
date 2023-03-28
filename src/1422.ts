function maxScore(s: string): number {
  const arrayWithString: string[] = s.split("");
  let result: number = 0;
  for (let i = 1; i < arrayWithString.length; i++) {
    let left = arrayWithString
      .slice(0, i)
      .filter((num: string) => num === "0").length;
    let right = arrayWithString
      .slice(i)
      .filter((num: string) => num === "1").length;
    result = Math.max(result, left + right);
  }
  return result;
}
