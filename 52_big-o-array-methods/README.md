# Array practice

Identify the time complexity of each of these functions with a 1 sentence justification for your answer. Assume `arr` is an array of length _n_.

## `arr.push()`

- Time complexity: O(1)
- Space complexity: O(n)
- Justification: It adds one or more elements to memory, it uses the length property to determine where to start inserting the given values, then it increments the length property by 1 for each element added. It uses _n_ memory slots for _n_ elements being added.

[push on MDN][push]

## `arr.pop()`

- Time complexity: O(1)
- Space complexity: O(1)
- Justification: It removes the element with index of array length - 1, then it decrements the array length variable by 1. It doesn't use any extra memory for these operations.

[pop on MDN][pop]

## `arr.shift()`

- Time complexity: O(n)
- Space complexity: O(1)
- Justification: It removes the element with index of 0, then it decrements the index of every other element by 1. It doesn't use any extra memory for these operations.

[shift on MDN][shift]

## `arr.unshift()`

- Time complexity: O(n)
- Space complexity: O(n)
- Justification: It adds an element to memory, it gives an index of 0, then it increments the index of every other element by 1. It uses _n_ memory slots for _n_ elements being added.

[unshift on MDN][unshift]

## `arr.splice()`

- Time complexity: O(n)
- Space complexity: O(n)
- Justification: The number of indices that need to be changed depend on which index you splice which the worst case scenario is at the start. The number memory slots used depend on the number of elements being added, if any.

[splice on MDN][splice]

## `arr.slice()`

- Time complexity: O(n)
- Space complexity: O(n)
- Justification: Makes a shallow copy of a sub array between two indexes, which the worst case scenario can be from the beginning to the end. It makes a copy into a new array so it can use as many elements as the original array.

[slice on MDN][slice]

## `arr.indexOf()`

- Time complexity: O(n)
- Space complexity: O(1)
- Justification: This method goes through the array starting from the first element until it finds an element that has the value of the searched element. It uses a variable for the target element and doesn't use any extra memory.

[indexOf on MDN][indexof]

## `arr.map()`

- Time complexity: O(n)
- Space complexity: O(n)
- Justification: It goes through the entire array so its a linear operation. It also creates a new array with the same length as the array operated on.

[map on MDN][map]

## `arr.filter()`

- Time complexity: O(n)
- Space complexity: O(n)
- Justification: It goes through the entire array so its a linear operation. It also creates a new array which can be as big as the array operated on.

[filter on MDN][filter]

## `arr.reduce()`

- Time complexity: O(n)
- Space complexity: O(n)
- Justification: It goes through the entire array so its a linear operation. It also uses as much memory as needed depending on what the return value will be.

[reduce on MDN][reduce]

## `arr.reverse()`

- Time complexity: O(n)
- Space complexity: O(1)
- Justification: It reverses the order of every element of the calling array. Because it transposes the elements in place, it mutates the original array, so it doesn't use any extra memory.

[reverse on MDN][reverse]

## `[...arr]`

- Time complexity: O(n)
- Space complexity: O(n)
- Justification: It expands every element of an array in places where elements are expected. It uses _n_ memory slots for _n_ elements being expanded.

[spread on MDN][spread]

[push]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
[pop]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
[shift]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
[unshift]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
[splice]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
[slice]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
[indexof]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[filter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
[reduce]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
[reverse]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
[spread]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
