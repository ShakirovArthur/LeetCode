var mergeAlternately = function(word1, word2) {
    const finalWord = [];
    for(let i = 0; i < word1.length + word2.length;i++){
        finalWord.push(word1[i]);
        finalWord.push(word2[i]);
    }
    return finalWord.join('')
};
