var heightChecker = function(heights) {
    let count = 0;
    const arr = [...heights].sort((a,b) => a - b)
    for (let i = 0; i < heights.length; i++){
        if(heights[i] !== arr[i]){
            count++
        }
    }
    return count
};
