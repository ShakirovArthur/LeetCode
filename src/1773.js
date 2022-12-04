var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
items.forEach(function(item) {
  const obj = {
    type: item[0],
    color: item[1],
    name: item[2]
  }
  if(obj[ruleKey] === ruleValue){
    count++;
  }
});
    return count;
};
