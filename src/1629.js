var slowestKey = function(releaseTimes, keysPressed) {
    const abc =[]
const obj = {}
for(let i=0;i<releaseTimes.length;i++){
    if(isNaN(releaseTimes[i-1])){
      abc.push(releaseTimes[i] - 0);
    }
      else { abc.push(releaseTimes[i] - releaseTimes[i-1])}
    
}
const key = keysPressed.split('')

key.forEach((item,index) => {
    if (obj[item] > abc[index]) {
    return obj[item];
  }
  obj[item] = abc[index];
})
let count = abc[0];
let result = keysPressed[0];
for (let value in obj) {
  if (obj[value] >= count) {
    if (count !== obj[value] || (count === obj[value] && result < value)) {
      result = value;
    } 
    count = obj[value];
   
  }
}
    return result
};
