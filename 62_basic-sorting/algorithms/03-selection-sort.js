/**
 * Out-of-place selection sort (Do not modify the original array)
 * - Time complexity: O(n²)
 * - Space complexity: O(n)
 */
function selectionSort(arr) {
  // Copy the original array
  const arrCopy = arr.slice();
  // Create an array to store the sorted values
  const sorted = [];

  // While the array is not empty...
  while (arrCopy.length) {
    // Do not move this console.log
    console.log(sorted.join(","));

    //  Find the index of the minimum value in the unsorted half
    let minimumIndex = 0;

    for (let i = 1; i < arrCopy.length; i++) {
      const currentValue = arrCopy[i];
      const minimumValue = arrCopy[minimumIndex];

      if (currentValue < minimumValue) {
        minimumIndex = i;
      }
    }

    //  Save and remove the value at the min index
    const minimumValue = arrCopy.splice(minimumIndex, 1);

    //  Add the min value to the end of the sorted array
    sorted.push(...minimumValue);
  }

  // return sorted array
  return sorted;
}

/**
 * In-place selection sort (Mutates the original array)
 * - Time complexity: O(n²)
 * - Space complexity: O(1)
 */
function selectionSortInPlace(arr) {
  // Set a pointer at zero diving the array into sorted and unsorted halves
  let divider = 0;

  // Repeat while the unsorted half is not empty:
  while (divider < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let minimumIndex = divider;

    for (let i = divider + 1; i < arr.length; i++) {
      const currentValue = arr[i];
      const minimumValue = arr[minimumIndex];

      if (currentValue < minimumValue) {
        minimumIndex = i;
      }
    }

    // Save the min value
    const minimumValue = arr[minimumIndex];

    // Shift every unsorted value to the left of the min value to the right by 1
    for (let i = minimumIndex; i > divider; i--) {
      arr[i] = arr[i - 1];
    }

    // Put the min value at the divider
    arr[divider] = minimumValue;

    // Increment the divider and repeat
    divider++;
  }
}

module.exports = { selectionSort, selectionSortInPlace };
