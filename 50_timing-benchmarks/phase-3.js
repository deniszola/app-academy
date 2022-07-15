const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Runs `addNums` in 10 increasing increments
  function addNums10(increment) {
    // Fill this in
    const sums = [];

    for (let i = increment; i <= 10 * increment; i += increment) {
      const startTime = Date.now();
      sums.push(addNums(i));
      const endTime = Date.now();
      console.timeLog("\naddNums10Timing");
      console.log(`Runtime (${i} increment): ${endTime - startTime}ms`);
    }

    return sums;
  }

  // Then, add timing code
  // Your code here
  console.time("\naddNums10Timing");
  addNums10(increment);
  console.timeEnd("\naddNums10Timing");
}

function addManyNums10Timing(increment) {
  // Copy your `addManyNums10` code here
  // Runs `addManyNums` in 10 increasing increments
  function addManyNums10(increment) {
    // Fill this in
    const sums = [];

    for (let i = increment; i <= 10 * increment; i += increment) {
      const startTime = Date.now();
      sums.push(addManyNums(i));
      const endTime = Date.now();
      console.timeLog("\naddManyNums10Timing");
      console.log(`Runtime (${i} increment): ${endTime - startTime}ms`);
    }

    return sums;
  }

  // Then, add timing code
  // Your code here
  console.time("\naddManyNums10Timing");
  addManyNums10(increment);
  console.timeEnd("\naddManyNums10Timing");
}

n = 1000000;
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000;
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
