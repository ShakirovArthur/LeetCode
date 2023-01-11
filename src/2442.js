var countDistinctIntegers = function(nums) {
    let res = [];
    nums.forEach((item) => {
      let str = String(item).split("").reverse();
      res.push(Number(str.join("")));
    });
    const result = nums.concat(res);
    const distinctNumber = new Set(result)
    return distinctNumber.size
};
