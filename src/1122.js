var relativeSortArray = function (arr1, arr2) {
  let matches = [];
  let noMatches = [];

  arr1.forEach((item) => {
    if (arr2.includes(item)) {
      matches.push(item);
    } else {
      noMatches.push(item);
    }
  });

  matches.sort((a, b) => arr2.indexOf(a) - arr2.indexOf(b));

  noMatches.sort((a, b) => a - b);

  const result = matches.concat(noMatches);

  return result;
};
