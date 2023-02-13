var findTheArrayConcVal = function(nums) {
    let res = [];

    while(nums.length > 0){
        if(nums.length === 1){
            res.push(String(nums.pop()))
        }else{
            res.push(String(nums.shift()) + nums.pop());
        }
    };

    let result = 0;

    res.forEach((item) => {
        result += Number(item)
    })
    return result
};
