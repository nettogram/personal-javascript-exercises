const add = function(firstNum, secondNum) {
  return firstNum + secondNum;
};

const subtract = function(firstNum, secondNum) {
  return firstNum - secondNum;
};

const sum = function(arrayOfNum) {
  let totalSum = arrayOfNum.reduce((sum, current) => sum + current, 0);
  return totalSum;
};

const multiply = function(arrayOfNum) {
  let total = arrayOfNum.reduce((product, current) => product * current);
  return total;
};

const power = function(base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function(number) {
  let newArray = [];
  const testForZero = number
  while (number != 0) {
    newArray.push(number);
    number--;
  }
  if (testForZero == 0) {
    return 1;
  }
  let factorialAns = newArray.reduce((product, current) => product * current);
  return factorialAns;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
