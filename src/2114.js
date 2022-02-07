let sentences = ["please wait", "continue to fight", "continue to win"];
let a = 0;
let max = 0;
sentences.forEach(function (item) {
  a = item.split(" ");
  if (a.length > max) {
    max = a.length;
  }
});
console.log(max);
