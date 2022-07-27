/**
 * Bubble sort
 * - Time complexity: O(n²)
 * - Space complexity: O(1)
 */
function bubbleSort(arr) {
  let swaps;

  do {
    swaps = 0;

    // Iterate through the array
    for (let i = 0; i < arr.length - 1; i++) {
      const current = arr[i];
      const next = arr[i + 1];

      // If the current value is greater than its neighbor to the right
      if (current > next) {
        // Swap those values
        swaps++;
        [arr[i], arr[i + 1]] = [next, current];

        // Do not move this console.log
        console.log(arr.join(","));
      }
    }

    // If you get to the end of the array and no swaps have occurred, return
    // Otherwise, repeat from the beginning
  } while (swaps !== 0);
}

module.exports = bubbleSort;
