/**
 * Merge Sort out-of-place (Do not modify the original array)
 *
 * - Time complexity: O(n log n)
 * - Space complexity: O(n log n)
 */
function mergeSort(arr) {
  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  if (arr.length <= 1) return arr;

  // Divide the array in half
  let arrA = arr.slice(0, arr.length / 2);
  let arrB = arr.slice(arr.length / 2);

  // Recursively sort the left half
  arrA = mergeSort(arrA);
  // Recursively sort the right half
  arrB = mergeSort(arrB);

  // Merge the halves together and return
  return merge(arrA, arrB);
}

/**
 * Merge out-of-place (Do not modify the original arrays)
 * Takes in two sorted arrays and returns them merged into one
 *
 * - Time complexity: O(n)
 * - Space complexity: O(n)
 */
function merge(arrA, arrB) {
  // Create an empty return array
  const merged = [];

  // Point to the first value of each array
  let pointerA = 0;
  let pointerB = 0;

  // While there are still values in each array...
  while (pointerA < arrA.length && pointerB < arrB.length) {
    // Compare the first values of each array
    if (arrA[pointerA] < arrB[pointerB]) {
      // Add the smaller value to the return array
      merged.push(arrA[pointerA]);
      // Move the pointer to the next value in that array
      pointerA++;
    } else {
      // Add the smaller value to the return array
      merged.push(arrB[pointerB]);
      // Move the pointer to the next value in that array
      pointerB++;
    }
  }

  // If there are still values in an array,
  // add the remaining values to the return array
  if (pointerA < arrA.length) merged.push(...arrA.slice(pointerA));
  else if (pointerB < arrB.length) merged.push(...arrB.slice(pointerB));

  // Return the return array
  return merged;
}

module.exports = { merge, mergeSort };
