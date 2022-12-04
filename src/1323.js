var maximum69Number  = function(num) {
    const num2 = String(num).split('');
const arr = []
let count = true
for(let i = 0;i < num2.length;i++){
  if(num2[i] === '6' && count === true){
    num2[i] = '9'
    count = false
    arr.push(num2[i])
  }else {
    arr.push(num2[i])
  }
  
}
return parseInt(arr.join(''))

};
