var twoOutOfThree = function(nums1, nums2, nums3) {
    let result = [];
    nums1.forEach((item) => {
        if(nums2.includes(item) || nums3.includes(item)){
            result.push(item)
        }
    })
    nums2.forEach((item) => {
        if(nums3.includes(item)){
            result.push(item)
         }
    })
    const res = new Set(result)
    return [...res]
};
