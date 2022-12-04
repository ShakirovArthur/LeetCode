var interpret = function(command) {
    let out = command.replaceAll('()', 'o').replaceAll('(al)', 'al');
    return out;
};
