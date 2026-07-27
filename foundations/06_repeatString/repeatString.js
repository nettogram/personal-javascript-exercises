const repeatString = function(string, iterTime) {
    const stringCopy = string.slice(0);
    let finalString = "";
    if (iterTime < 0) {
        return 'ERROR'
    }
    for (let i = 0; i < iterTime; i++) {
        finalString = finalString.concat(stringCopy);
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
