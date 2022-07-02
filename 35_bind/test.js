// Your code here
const Employee = require("./employee");

const john = new Employee("John Wick", "Dog Lover");

// Test 1
setTimeout(john.sayName, 2000);
// I expect to be printed: 'undefined says hello'
// Because 'john.sayName' is a callback, 'setTimeout' only has the reference to 'john.sayName'
// so when 'john.sayName' is called the context or the 'this' keyword is the global context
// and since the global object doesn't have a 'name' variable, the log comes back as 'undefined'

// To make sure "John Wick says hello" will be printed to the terminal
// we need to bind the 'john' object to the 'sayName' function
const johnSayName = john.sayName.bind(john);
setTimeout(johnSayName, 2000);

// Test 2
setTimeout(john.sayOccupation, 3000);
// I expect to be printed: 'undefined is a undefined'
// Because the `sayOccupation()` instance method on the new `Employee`
// was invoked function-style by the `setTimeout`

// To make sure "John Wick is a Dog Lover" will be printed to the terminal
// we need to bind the 'john' object to the 'sayOccupation' function
const johnSayOccupation = john.sayOccupation.bind(john);
setTimeout(johnSayOccupation, 3000);
