var targetIndices = function(nums, target) {
    const array = nums.sort((a,b) => {return a -b });
    let result = [];
    array.forEach((item,index) => {
        if(item === target){
            result.push(index)
        }
    })
    return result
};
