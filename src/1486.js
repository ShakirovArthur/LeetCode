var xorOperation = function(n, start) {
    let arr = [];
const reducer = (a,b) => a^b;
for(let i = 0; i < n;i++){
  arr.push(start + 2 * i);
}
    return arr.reduce(reducer);
};
