/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

// your code here
function subsets(arr) {
  /*
  // Method 1 - Iterative
  arr.sort();
  const res = [[]];

  let count, subRes, preLength;

  for (let i = 0; i < arr.length; i++) {
    count = 1;

    while (arr[i] === arr[i + 1]) {
      count++;
      i++;
    }

    preLength = res.length;

    for (let j = 0; j < preLength; j++) {
      subRes = res[j].slice();

      for (let x = 1; x <= count; x++) {
        if (x > 0) subRes.push(arr[i]);

        res.push(subRes.slice());
      }
    }
  }

  return res;
  */

  /*
  // Method 2 - Iterative
  return arr.reduce(
    (sets, value) => sets.concat(sets.map((set) => [...set, value])),
    [[]]
  );
  */

  // Method 3 - Recursive
  if (arr.length === 0) return [[]];

  const lastEl = arr[arr.length - 1];
  const rest = arr.slice(0, arr.length - 1);

  const subsetsWithoutLast = subsets(rest);
  const subsetsWithLast = subsetsWithoutLast.map((set) => [...set, lastEl]);

  return [...subsetsWithoutLast, ...subsetsWithLast];
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
