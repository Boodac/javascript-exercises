const add = function() {
  args = [...arguments];
  let total = 0;
  for(let i = 0;i<args.length;i++) {
    total += args[i];
  }
  return total;
};

const subtract = function() {
  args = [...arguments];
  let total = args[0]
  for(let i = 1;i<args.length;i++) {
    total -= args[i];
  }
  return total;
};

const sum = function(array) {
  return array.reduce((tally, curr) => tally + curr, 0);
};

const multiply = function(array) {
  return array.reduce((tally, curr) => tally * curr);
};

const power = function(x, y) {
	return x**y;
};

const factorial = function(x) {
	if(x < 0) return -1;
  else if (x === 0) return 1;
  else {
    return (x * factorial(x-1));
  }
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
