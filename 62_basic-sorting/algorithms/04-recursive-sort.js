/**
 * In-place recursive sort (Mutates the original array)
 *
 * Time and space complexity analysis
 *
 * - Time complexity: O(n²)
 * Let's start with the time complexity of recursiveSort.
 * Each recursive call sorts one value,
 * so there will be n total recursive calls to sort an array of length n.
 * Each call iterates through the entire array to find the max value which is O(n),
 * then splices out the max value which is also O(n).
 * These are not nested, so the overall time complexity of each call is O(2n),
 * or just O(n) since coefficients are ignored.
 * Since this is called n times through recursion, the overall time complexity is O(n2).
 *
 * - Space complexity: O(n)
 * Since arr.splice and arr.push both mutate the original array and no new arrays are created,
 * this algorithm works in-place with each call using O(1) extra space.
 * However, you may recall that each function is stored in memory on the call stack_
 * while it waits for later recursive functions to resolve. Since there are n recursive steps,
 * this function will occupy O(n) space on the call stack.
 */
function recursiveSort(arr) {
  // If the array is length 1 or less, return
  if (arr.length <= 1) return arr;

  // Find the largest value in the array
  let maxIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) maxIndex = i;
  }

  // Remove the largest value in the array
  const maxValue = arr.splice(maxIndex, 1);

  // Sort the remaining elements
  arr = recursiveSort(arr);

  // Do not move this console.log
  console.log(arr.join(","));

  // Put the largest value back at the end of the array
  arr.push(...maxValue);

  // return sorted array
  return arr;
}

/**
 * Divide and conquer
 * - Improve both the time and space complexity
 *
 * 1. Check the base case, return if length 1 or 0
 * 2. Split the array in half
 * 3. Recursively sort the left half and right half
 * 4. Put the left half and right half together and return
 */
function recursiveSortDivideAndConquer(arr) {}

module.exports = { recursiveSort, recursiveSortDivideAndConquer };
