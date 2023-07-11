var countDigits = function(num) {
     const arrayOfNumber = Array.from(String(num),Number)
  let count = 0;
  arrayOfNumber.forEach((item) => {
    if(num % item === 0){
      count++
    }
  })
  return count;
};
