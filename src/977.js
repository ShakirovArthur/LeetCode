var sortedSquares = function(nums) {
    const result = [];
    nums.forEach((item) => {
        result.push(item*item)
    })
    return result.sort((a,b) =>  a-b)
};
