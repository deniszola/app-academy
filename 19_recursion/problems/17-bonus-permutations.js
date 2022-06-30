/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

// your code here
function permutations(array) {
  /*
  // Method 1 - Recursive
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(array);

  return result;
  */

  // Method 2 - Recursive
  if (array.length === 0) return [[]];

  const firstEl = array[0];
  const rest = array.slice(1);

  const permsWithoutFirst = permutations(rest);
  const permsWithFirst = permsWithoutFirst.reduce((perms, perm) => {
    for (let i = 0; i <= perm.length; i++) {
      perms.push([...perm.slice(0, i), firstEl, ...perm.slice(i)]);
    }

    return perms;
  }, []);

  return permsWithFirst;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
