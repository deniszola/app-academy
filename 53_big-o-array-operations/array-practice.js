// Time complexity: O(n)
// Space complexity: O(n)
const findMinimum = (arr) => {
  // Your code here
  // Time complexity of `arr.reduce()`: O(n)
  return arr.reduce(
    (smallest, number) => (number < smallest ? number : smallest),
    arr[0]
  );
};

// Time complexity: O(n)
// Space complexity: O(1)
const runningSum = (arr) => {
  // Your code here
  // Time complexity of `for statement`: O(n)
  for (let i = 1; i < arr.length; i++) arr[i] = arr[i - 1] + arr[i];

  return arr;
};

// Time complexity: O(n)
// Space complexity: O(n)
const evenNumOfChars = (arr) => {
  // Your code here
  // Time complexity of `arr.reduce()`: O(n)
  return arr.reduce((sum, str) => (!(str.length % 2) ? ++sum : sum), 0);
};

// Time complexity: O(n²)
// Space complexity: O(n²)
const smallerThanCurr = (arr) => {
  // Your code here
  // Time complexity of `arr.map()`: O(n)
  return arr.map((current) =>
    // Time complexity of `arr.reduce()`: O(n)
    arr.reduce((count, num) => (num < current ? ++count : count), 0)
  );
};

// Time complexity: O(n²)
// Space complexity: O(1)
const twoSum = (arr, target) => {
  // Your code here
  // Time complexity of `for statement`: O(n)
  for (let i = 0; i < arr.length - 1; i++) {
    // Time complexity of `for statement`: O(n)
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return true;
    }
  }

  return false;
};

// Time complexity: O(n)
// Space complexity: O(1)
const secondLargest = (arr) => {
  // Your code here
  let largest = arr[0];
  let second;

  // Time complexity of `for statement`: O(n)
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];

    if (current > largest) {
      second = largest;
      largest = current;
    } else if (current > (second || 0)) {
      second = current;
    }
  }

  return second;
};

// Time complexity: O(n²)
// Space complexity: O(n)
const shuffle = (arr) => {
  // Your code here
  const shuffled = [];

  function addItem(item) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    if (typeof shuffled[randomIndex] === "undefined") {
      shuffled[randomIndex] = item;
      return;
    }

    return addItem(item);
  }

  // Time complexity of `arr.forEach()`: O(n)
  arr.forEach((item) => {
    addItem(item);
  });

  return shuffled;
};

module.exports = [
  findMinimum,
  runningSum,
  evenNumOfChars,
  smallerThanCurr,
  twoSum,
  secondLargest,
  shuffle,
];
