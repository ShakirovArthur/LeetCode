function sortEvenOdd(nums: number[]): number[] {
    let odd: Array<number> = [];
    let even: Array<number> = [];
  
    nums.forEach((item, index) => {
      if (index % 2 === 0) {
        even.push(item);
      } else {
        odd.push(item);
      }
    });
  
    let oddFilter:Array<number> = odd.sort((a, b) => b - a);
    let evenFilter:Array<number> = even.sort((a, b) => a - b);
  
    let result:Array<number | undefined> = [];
  
    for (let i = 0; i < nums.length; i++) {
        if(i % 2 === 0){
            result.push(evenFilter.shift())
        } else {
            result.push(oddFilter.shift())
        }
    }
  
    return result;
  }
