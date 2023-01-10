var minPartitions = function(n) {
    const array = n.split('');
    return Math.max(...array)
};
