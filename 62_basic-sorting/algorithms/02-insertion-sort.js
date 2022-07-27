/**
 * Insertion Sort out-of-place (Do not modify the original array)
 * - Time complexity: O(n²)
 * - Space complexity: O(n)
 */
function insertionSort(arr) {
  // Your code here
  // Copy the original array
  const arrCopy = arr.slice();
  // Create an array to store the sorted values
  const sorted = [];

  // While the array is not empty:
  while (arrCopy.length) {
    // - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
    console.log(sorted.join(","));

    // - Pop a value from the array
    const value = arrCopy.pop();
    // - Create a new spot at the end of the array with null to help with comparisons
    sorted[sorted.length] = null;

    // - Walk through the sorted array in reverse order
    for (let i = sorted.length - 1; i >= 0; i--) {
      const leftValue = sorted[i - 1] || 0;

      // - Check if the value to the left is smaller than the new value
      if (leftValue < value) {
        // - If so, you've reached the insertion point so exit the loop
        // - Insert the unsorted value at the break point
        sorted[i] = value;
        break;
      }

      // - If not shift the value to the right by 1 and continue
      sorted[i] = leftValue;
    }
  }

  // Return the sorted array
  return sorted;
}

/**
 * In-place Insertion Sort (Mutates the original array)
 * - Time complexity: O(n²)
 * - Space complexity: O(1)
 */
function insertionSortInPlace(arr) {
  // Your code here
  // Set a pointer dividing the array into sorted and unsorted halves
  let divider = 1;

  // Repeat while the unsorted half is not empty:
  while (divider < arr.length) {
    // - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
    console.log(arr.join(","));

    // - Grab the first value from the unsorted half
    const value = arr[divider];

    // - For each value starting from the divider,
    for (let i = divider; i >= 0; i--) {
      const leftValue = arr[i - 1] || 0;

      // - Check if the value to the left is smaller than the unsorted value
      if (leftValue < value) {
        // - If so, you've reached the insertion point so exit the loop
        // - Insert the unsorted value at the break point
        arr[i] = value;
        break;
      }

      // - If not shift the value to the right by 1 and continue
      arr[i] = leftValue;
    }

    // - Increment the dividing pointer and repeat
    divider++;
  }

  // Return the mutated array
  return arr;
}

module.exports = { insertionSort, insertionSortInPlace };
