var partitionArray = function(nums, k) {
    nums.sort((a,b) => a-b);
    let min = nums[0];
    let count = 1;
    for(let i = 0;i < nums.length;i++){
        let difference = nums[i] - min;
        if(difference > k) {
            count++;
            min = nums[i]
        }
    }
    return count
};
