const { expect } = require("chai");

const chai = require("chai");
const spies = require("chai-spies");

chai.use(spies);

const { quickSort } = require("../algorithms/02-quick-sort.js");

describe("Better Sorting Algorithms", function () {
  let arr;
  let consoleSpy;

  beforeEach(function () {
    consoleSpy = chai.spy.on(console, "log");

    arr = [2, 4, 6, 8, 1, 3, 5, 7, 9];
  });

  afterEach(() => {
    chai.spy.restore(console, "log");
  });

  it("performs a out-of-place quick sort", function () {
    let newArr = quickSort(arr);

    expect(newArr).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(arr).to.deep.equal([2, 4, 6, 8, 1, 3, 5, 7, 9]);
  });
});
