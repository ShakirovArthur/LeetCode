function findComplement(num: number): number {
  const binaryCode = [...num.toString(2)];

  let reverse = binaryCode.map((item) => (item === "0" ? "1" : "0"));

  const result = reverse.join("");

  return parseInt(result, 2);
}
