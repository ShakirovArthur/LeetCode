var sortSentence = function(s) {
    const a = s.split(' ')
.sort((a,b) => a.substr(-1) - b.substr(-1))
const b = a.map(item => item.slice(0,-1))
return b.join(' ')
};
