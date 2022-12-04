var minimumSum = function(num) {
    const numArr = num.toString().split('');
let result = 0;
numArr.sort();
for (let i = 0; i < numArr.length / 2;i++){
  let pair = numArr[i] + numArr[numArr.length - 1 - i];
  result += +pair;
}
    return result;
};
