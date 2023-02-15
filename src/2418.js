var sortPeople = function (names, heights) {
  const res = [];
  for (let i = 0; i < names.length; i++) {
    res.push([names[i], heights[i]]);
  }

  res.sort(function (a, b) {
    if (b[1] < a[1]) {
      return -1;
    }
    if (b[1] > a[1]) {
      return 1;
    }
  });

  return res.map((item) => item[0]);
};
