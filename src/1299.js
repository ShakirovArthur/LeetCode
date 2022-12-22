var replaceElements = function(arr) {
    let result =[];
    arr.forEach((item,index) => {
        let array = arr.slice(index)
            result.push(Math.max.apply(null,array))
    })
    result.push(-1)
return result.slice(1)
};
