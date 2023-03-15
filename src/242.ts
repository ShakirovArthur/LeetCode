function isAnagram(s: string, t: string): boolean {
  const firstWordSplit = s.split("").sort();
  const secondWordSplit = t.split("").sort();
  const result =
    firstWordSplit.length === secondWordSplit.length &&
    firstWordSplit.every((value, index) => value === secondWordSplit[index]);
  return result;
}
