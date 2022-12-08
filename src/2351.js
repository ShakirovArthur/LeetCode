var repeatedCharacter = function(s) {
    const a = s.split('')
    let one = []
    let two = []
    a.forEach((item) => {
        if(one.includes(item)){
            two.push(item)
    }else{
            one.push(item)
    }
    })
    const result = two.join()
    return result[0]
};
