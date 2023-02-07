var frequencySort = function(nums) {
    let obj = {};
    nums.forEach((item) => {
        if(obj[item]){
         obj[item]++
        } else {
            obj[item] = 1
        }
    })


const abc = nums.sort((a,b) => obj[a] - obj[b] || b-a)

return abc
};
