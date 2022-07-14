// Your code here
Array.prototype.isEqual = function (array) {
  for (let i = 0; i < array.length; i++) if (array[i] !== this[i]) return false;

  return true;
};
