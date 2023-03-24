function romanToInt(s: string): number {
  interface obj {
    [key: string]: number;
  }

  let symbolNotation: obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result: number = 0;

  for (let i = 0; i < s.length; i++) {
    if (symbolNotation[s[i]] < symbolNotation[s[i + 1]]) {
      result += symbolNotation[s[i + 1]] - symbolNotation[s[i]];
      i++;
    } else {
      result += symbolNotation[s[i]];
    }
  }

  return result;
}
