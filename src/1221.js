let s = "RLRRLLRLRL";
let num = 0;
let sum = 0;
for (let i = 0; i < s.length; i++) {
  if (s[i] === "R") {
    num++;
  }
  if (s[i] === "L") {
    num--;
  }
  if (num === 0) {
    sum++;
  }
}
console.log(sum);
