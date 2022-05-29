function oddIndices(arr) {
  // Return an array containing all the odd indices in the array
  // Your code here
  const odds = [];

  for (let i = 1; i < arr.length; i += 2) odds.push(arr[i]);

  return odds;
}

function oddReverse(arr) {
  // Return an array containing all the odd indices starting from the end
  // Your code here
  const odds = [];
  const start = arr.length % 2 ? arr.length - 2 : arr.length - 1;

  for (let i = start; i > 0; i -= 2) odds.push(arr[i]);

  return odds;
}

function secondPower(arr) {
  // Return an array containing all indices that are powers of 2
  // Your code here
  const indices = [];

  for (let i = 0, j = 1; j < arr.length; i++, j = Math.pow(2, i)) {
    indices.push(arr[j]);
  }

  return indices;
}

function nthPower(arr, n) {
  // Return an array containing all indices that are powers of n
  // Your code here
  const indices = [];

  for (let i = 0, j = 1; j < arr.length; i++, j = Math.pow(n, i)) {
    indices.push(arr[j]);
  }

  return indices;
}

function firstHalf(arr) {
  // Return an array containing the first half of an array
  // Include middle index on odd length arr
  // Your code here
  const firstHalf = [];

  for (let i = 0; i < Math.ceil(arr.length / 2); i++) firstHalf.push(arr[i]);

  return firstHalf;
}

function secondHalf(arr) {
  // Return an array containing the second half of an array
  // Exclude middle index on odd length arr
  // Your code here
  const secondHalf = [];

  for (let i = Math.ceil(arr.length / 2); i < arr.length; i++) {
    secondHalf.push(arr[i]);
  }

  return secondHalf;
}

module.exports = {
  oddIndices,
  oddReverse,
  secondPower,
  nthPower,
  firstHalf,
  secondHalf,
};
