var findDuplicates = function(nums) {
    const result = nums.filter((item,index,items) => {
    return items.indexOf(item) !== index
    })
    return result
};
