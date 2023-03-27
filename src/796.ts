function rotateString(s: string, goal: string): boolean {
  const initialWord: string = s;

  function letterChanges(s: string, goal: string): boolean {
    let sArr: string[] = s.split("");
    let firstLetter: string = sArr.shift();
    sArr.push(firstLetter);
    let sTwo: string = sArr.join("");
    if (sTwo === goal) {
      return true;
    } else if (sTwo === initialWord) {
      return false;
    } else {
      return letterChanges(sTwo, goal);
    }
  }
  return letterChanges(s, goal);
}
