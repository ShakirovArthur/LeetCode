function countWords(words1: string[], words2: string[]): number {

    interface Words {
      [key: string] : number
    }

    let valueWords: Words = {};
    let valueWordsTwo: Words = {};
    
    words1.forEach((item) => {
      if(valueWords[item]){
        valueWords[item]++
      } else {
        valueWords[item] = 1
      }
    })
    
    
    words2.forEach((item) => {
      if(valueWordsTwo[item]){
        valueWordsTwo[item]++
      } else {
        valueWordsTwo[item] = 1
      }
    })
    
    let result: Array<string> = []
    for(let key in valueWords){
      if(valueWords[key] === 1 && valueWordsTwo[key] === 1){
        result.push(key)
      }
    }
    
    return result.length
    };