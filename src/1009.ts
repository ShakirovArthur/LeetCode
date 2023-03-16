function bitwiseComplement(n: number): number {
  let result: string = n
    .toString(2)
    .split("")
    .map((x) => (x === "1" ? "0" : "1"))
    .join("");

  return parseInt(result, 2);
}
