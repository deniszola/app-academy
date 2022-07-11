function myMap(inputArray, callback) {
  // Your code here
  const outputArray = [];

  for (let i = 0; i < inputArray.length; i++) {
    outputArray.push(callback(inputArray[i]));
  }

  return outputArray;
}

module.exports = myMap;
