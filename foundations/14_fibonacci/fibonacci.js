const fibonacci = function(index) {
    const error = "OOPS";
    let fibonacciSequence = [1, 1];
    if (typeof(index) == "string") {
        index = Number(index);
    }
    if (index == 1 || index == 2) {
        return 1;
    } else if (index == 0) {
        return 0;
    } else if (index < 0) {
        return error;
    } else {
        for (let i = 2; i <= index; i++) {
            fibonacciSequence.push(
                                    fibonacciSequence[i - 2] + 
                                    fibonacciSequence[i - 1]);
        }
        return fibonacciSequence[fibonacciSequence.length - 2];
    }

};

// Do not edit below this line
module.exports = fibonacci;
