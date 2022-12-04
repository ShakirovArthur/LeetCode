var isSameAfterReversals = function(num) {
    // const num2 = num.toString().split('').reverse().reverse().join('')

// if(num === 0){
//   return true
// } else if (num % 10 === 0) {
//     return false
// } else if (num === Number(num2)){
//   return true
// }
    // if(num === 0){
    //     return true
    // }; 
    // return num % 10 !==0
    return num === 0 ? true : num % 10 !== 0
};
