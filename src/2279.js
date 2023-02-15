var percentageLetter = function (s, letter) {
  const array = s.split("");
  let count = 0;
  array.forEach((item) => {
    if (item === letter) {
      count++;
    }
  });
  const result = (count / s.length) * 100;
  return Math.trunc(result);
};
