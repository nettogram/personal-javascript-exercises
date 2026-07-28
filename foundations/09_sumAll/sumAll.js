const sumAll = function(num1, num2) {
    const findBiggerNum = () => {
        if (num1 < num2) {
            return num2;
        } else {
            return num1;
        }
    }
    let findFinalNum = () => {
        if (num1 < num2) {
            return num1;
        } else {
            return num2;
        }
    }

    let totalSum = 0;
    let biggerNum = findBiggerNum();
    let finalNum = findFinalNum();

    if ((Number.isInteger(num1) && Number.isInteger(num2)) &&
        num1 > 0 && 
        num2 > 0) { 
        while (finalNum < biggerNum + 1) {
            totalSum += finalNum;
            finalNum++;
        }
    } else return "ERROR";

    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
