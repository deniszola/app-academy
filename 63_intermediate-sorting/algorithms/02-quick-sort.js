/**
 * Out-of-place quick sort (Do not modify the original arrays)
 *
 * - Time complexity: Average: O(n log n) || Worst case: O(n²)
 * - Space complexity: O(n log n)
 */
function quickSort(arr) {
  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  if (arr.length <= 1) return arr;

  // Pick the first value as the pivot
  const pivot = arr[0];
  // Create `left` and `right` empty arrays
  let left = [];
  let right = [];

  // Orient the pivot so that...
  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i];

    // every number smaller than the pivot is to the left
    if (currentValue < pivot) left.push(currentValue);
    // every number larger (or equal) than the pivot is to the right
    else if (currentValue >= pivot) right.push(currentValue);
  }

  // Recursively sort the left
  left = quickSort(left);
  // Recursively sort the right
  right = quickSort(right);

  // Return the left, pivot and right in sorted order
  return [...left, pivot, ...right];
}

module.exports = { quickSort };
