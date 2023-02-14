var intersection = function(nums) {
    let obj = {};

    nums.forEach((items) => {
        items.forEach((item) => {
            if(obj[item]){
                obj[item]++
            } else {
                obj[item] = 1
            }
        })
    })

    let result = [];

    for(let key in obj){
        if(obj[key] === nums.length){
            result.push(Number(key))
        }
    }

    return result.sort((a,b) => a-b)

};
