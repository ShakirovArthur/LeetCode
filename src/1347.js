var minSteps = function(s, t) {
    let obj = {};
    for (let i = 0; i < t.length; i++){
        if(obj[t[i]]){
            obj[t[i]]++
        } else {
            obj[t[i]] = 1
        }
    }
    for (let i = 0; i < s.length;i++){
        if(obj[s[i]]){
            obj[s[i]]--
        } 
    }
    let count = 0;
    for(let key in obj){
        if(obj[key]){
            count = count + obj[key]
        }
    }
    return count
};
