const [addNums, addManyNums] = require("./phase-1");

/**
 * Implement `addNums100` and `addManyNums100`
 */

function addNums100Timing(increment) {
  // Runs `addNums` in 100 increasing increments
  function addNums100(increment) {
    const sums = [];

    for (let i = increment; i <= 100 * increment; i += increment) {
      const startTime = Date.now();
      sums.push(addNums(i));
      const endTime = Date.now();
      console.timeLog("\naddNums100Timing");
      console.log(`Runtime (${i} increment): ${endTime - startTime}ms`);
    }

    return sums;
  }

  // Add timing
  console.time("\naddNums100Timing");
  addNums100(increment);
  console.timeEnd("\naddNums100Timing");
}

function addManyNums100Timing(increment) {
  // Runs `addManyNums` in 100 increasing increments
  function addManyNums100(increment) {
    const sums = [];

    for (let i = increment; i <= 100 * increment; i += increment) {
      const startTime = Date.now();
      sums.push(addManyNums(i));
      const endTime = Date.now();
      console.timeLog("\naddManyNums100Timing");
      console.log(`Runtime (${i} increment): ${endTime - startTime}ms`);
    }

    return sums;
  }

  // Then, add timing code
  // Your code here
  console.time("\naddManyNums100Timing");
  addManyNums100(increment);
  console.timeEnd("\naddManyNums100Timing");
}

n = 1000000;
console.log(`addNums(${n}): `);
addNums100Timing(n);

console.log("\n***********\n");

n = 500;
console.log(`addManyNums(${n}): `);
addManyNums100Timing(n);
