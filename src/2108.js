var firstPalindrome = function(words) {
 for(let item of words){
  let d = item.split('').reverse().join('')
  if(item === d){
    return d
  }
}
return ''
};
