function isFive(num) {
  // Your code here
  return num === 5;
}

function isOdd(number) {
  // Your code here
  if (typeof number !== "number") throw new Error("the input is not a number");

  return !!(number % 2);
}

function myRange(min, max, step = 1) {
  // Your code here
  const res = [];

  for (; min <= max; min += step) res.push(min);

  return res;
}

module.exports = { isFive, isOdd, myRange };
