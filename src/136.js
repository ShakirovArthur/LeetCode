var singleNumber = function(nums) {
    let obj = {};
    for (let i = 0;i<nums.length;i++){
        if(nums[i] in obj){
            delete obj[nums[i]]  
        }else{
            obj[nums[i]] = 0
        }
    }
return Object.keys(obj)[0]
};
