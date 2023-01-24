var maxIceCream = function(costs, coins) {
    const sortArr = costs.sort((a,b) => a-b)
    let count = 0
    sortArr.forEach((item) => {
        coins -= item
        if(coins >= 0 ){
            count++
        }
    })
    return count
};
