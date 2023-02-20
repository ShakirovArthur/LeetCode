function canBeTypedWords(text: string, brokenLetters: string): number {
  const words: Array<string> = text.split(" ");

  const brokenLettersArr: Array<string> = brokenLetters.split("");

  let result: number = words.length;

  words.forEach((item) => {
    let wordSplit: Array<string> = item.split("");
    for (let i = 0; i < brokenLettersArr.length; i++) {
      if (wordSplit.includes(brokenLettersArr[i])) {
        result--;
        break;
      }
    }
  });

  return result;
}
