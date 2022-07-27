# Recursive Sorting

## Recursion review

There are three traits that define a valid recursive function:

1. The function calls itself recursively
2. There is a base case where the recursion ends
3. The state moves towards the base case with each recursive call

Here is a classic recursive factorial function:

```javascript
function factorial(n) {
  if (n <= 1) return 1;

  return n * factorial(n - 1);
}
```

The recursive call is `factorial(n - 1)` and the base case is `if (n <= 1) return 1;`. The `n - 1` inside the recursive call moves the state closer to the base case with each recursive step, ensuring that your recursion returns without overflowing your stack.

Remember these three steps because they are crucial to understanding recursive sorting algorithms.

## A recursive sorting example

Let's say you have an idea for a new sorting algorithm. Find and remove the largest value from the array, sort the remaining elements, then put the largest value in the back of the array and return. So given the array, `[3, 2, 0, 4, 1]`, first you remove the largest element, 4, sort the rest, which turns `[3, 2, 0, 1]` into `[0, 1, 2, 3]`, then add the 4 back to the end and return `[0, 1, 2, 3, 4]`. Will this work?

Although it seems like cheating to call a sorting algorithm within another sorting algorithm, this is actually 100% valid. Since you are creating a function that sorts array values, the function can absolutely call itself recursively, as long as the other two conditions, base case and movement toward the base case, are satisfied.

```javascript
function recursiveSort(arr) {
  // Find and remove the largest value in the array
  // Sort the remaining elements
  // Put the largest value back at the end of the array
}
```

The question remains, what is the base case? How do you know if the state is moving toward that base case with each call? The base case is a hard-coded state that returns a valid function, in this case returning a valid sorted array. Here's the key insight: _ANY array of length 1 or 0 is sorted_. `[1]`: sorted. `[100000]`: sorted. `[]`: sorted. You get the picture.

So we have our base case: If the array's length is 1 or less, return the array. Now all that's left is making sure the state moves toward the base case with each recursive call. Since one value (the largest) is removed with each call, the length of the array will decrease by 1 each time, eventually hitting the base case.

Now that you've satisfied the base case, you can fill in the code.

```javascript
function recursiveSort(arr) {
  // If the array is length 1 or less, return
  if (arr.length <= 1) return arr;

  // Find and remove the largest value in the array
  let maxIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) maxIndex = i;
  }
  const maxValue = arr[maxIndex];
  arr.splice(maxIndex, 1);

  // Sort the remaining elements
  arr = recursiveSort(arr);

  // Put the largest value back at the end of the array
  arr.push(maxValue);

  return arr;
}
```

Testing with `recursiveSort([3, 2, 0, 4, 1])` correctly returns `[0, 1, 2, 3, 4]`. Like magic, this recursive sort just works!

## Time and space complexity analysis

Let's start with the time complexity of `recursiveSort`. Each recursive call sorts one value, so there will be _n_ total recursive calls to sort an array of length _n_. Each call iterates through the entire array to find the max value which is O(n), then splices out the max value which is also O(n). These are not nested, so the overall time complexity of each call is O(2n), or just O(n) since coefficients are ignored. Since this is called _n_ times through recursion, the overall time complexity is **O(n2)**.

Since `arr.splice` and `arr.push` both mutate the original array and no new arrays are created, this algorithm works _in-place_ with each call using O(1) extra space. However, you may recall that each function is stored in memory on the _call stack_\_ while it waits for later recursive functions to resolve. Since there are _n_ recursive steps, this function will occupy **O(n)** space on the call stack.

## Divide and Conquer: Improving time complexity

The time complexity of `recursiveSort` is **O(n2)**. Is there a way to improve that?

Each recursive step needs to visit all values in the array at least once. Whether that's a selection or insertion, that O(n) is unavoidable. Is there a way to reduce the depth of recursive calls? This would improve both the time and space complexity. It turns out there is: **divide and conquer**.

Similar to a binary search, instead of reducing the array by one each recursive call, you split it in half. This would require _log n_ recursive steps to reach the base case of an array of length 1 or 0. Following this logic, you can write out a rough set of steps like this:

1. Check the base case, return if length 1 or 0
2. Split the array in half
3. Recursively sort the left half and right half
4. Put the left half and right half together and return

You will be learning two algorithms that take two different approaches to this plan: _quicksort_ and _mergesort_. Both divide and conquer the input arrays to reduce the recursion depth to _log n_. Each level of recursion involves _n_ comparisons, resulting in a time complexity of **O(n log n)**. While this is slightly less efficient than O(n), it is MUCH more efficient than O(n2).

For comparison, given an _n_ of 1 million, _n log n_ is roughly 50000x faster than _n2_.

Think about these steps, and try to come up with an algorithm to implement a sorting algorithm with these 4 divide-and-conquer sorting steps.

## What you learned

In this reading, you learned how to implement a recursive sorting algorithm and outlined a plan to optimize the runtime. You were also introduced to **O(n log n)** complexity as a major upgrade from **O(n2)**.
