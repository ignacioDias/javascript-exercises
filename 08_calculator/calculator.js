const add = function(firstNum, sndNum) {
  return firstNum + sndNum;
};

const subtract = function(firstNum, sndNum) {
  return firstNum - sndNum;
};

const sum = function(arr) {
	let sum = 0;
  for(const num of arr) {
    sum += num;
  }
  return sum;
};

const multiply = function(arr) {
	let ret = 1;
  if(arr.length === 0)
    return 0;
  for(const num of arr) {
    ret *= num;
  }
  return ret;
};

const power = function(firstNum, sndNum) {
  return firstNum ** sndNum;
};

const factorial = function(num) {
	let fac = 1;
  if(num === 0)
    return 1;
  for(i = 1; i <= num; i++)
    fac *= i;
  return fac;
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
