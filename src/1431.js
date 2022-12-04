var kidsWithCandies = function(candies, extraCandies) {
let max = 0;
let result = [];
for (let item of candies) {
  if (item > max) {
    max = item;
  }
}
for (let item of candies) {
  if (item + extraCandies >= max) {
    result.push(true);
  } else {
    result.push(false);
  }
}
    return result;
};
