var restoreString = function(s, indices) {
let arr = s.split("");
let resul = [];
indices.forEach(function(item,i){
    resul[item] = arr[i];
});
let m = resul.join('');
    return m;
};
