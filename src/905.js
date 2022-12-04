var sortArrayByParity = function(nums) {
    const even = [];
    const odd = [];
    nums.forEach((item) => {
        if(item % 2 === 0){
            even.push(item)
        } else {
            odd.push(item)
        }
    })
    return[...even,...odd]
};
