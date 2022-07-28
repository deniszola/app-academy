const { expect } = require("chai");

const chai = require("chai");
const spies = require("chai-spies");

chai.use(spies);

const { merge, mergeSort } = require("../algorithms/01-merge-sort.js");

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

  it("merges two sorted arrays", function () {
    const arr1 = [1, 3, 5, 7, 9, 11];
    const arr2 = [0, 2, 4, 6, 8, 10];

    const merged = merge(arr1, arr2);

    expect(merged).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });

  it("merges two sorted arrays of different lengths", function () {
    const arr1 = [1, 3];
    const arr2 = [0, 2, 4, 6, 8, 10];

    expect(merge(arr1, arr2)).to.deep.equal([0, 1, 2, 3, 4, 6, 8, 10]);

    const arr3 = [0, 3, 6, 9];
    const arr4 = [];

    expect(merge(arr3, arr4)).to.deep.equal([0, 3, 6, 9]);
  });

  it("performs a out-of-place merge sort", function () {
    let newArr = mergeSort(arr);

    expect(newArr).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(arr).to.deep.equal([2, 4, 6, 8, 1, 3, 5, 7, 9]);
  });
});
