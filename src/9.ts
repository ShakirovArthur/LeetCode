function isPalindrome(x: number): boolean {
  const revertNum = String(x).split("").reverse().join("");
  return String(x) === revertNum;
}
