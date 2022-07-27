const { expect } = require("chai");

const chai = require("chai");
const spies = require("chai-spies");

chai.use(spies);

const {
  recursiveSort,
  recursiveSortDivideAndConquer,
} = require("../algorithms/04-recursive-sort");

describe("Basic Sorting Algorithms", function () {
  let arr;
  let consoleSpy;

  beforeEach(function () {
    consoleSpy = chai.spy.on(console, "log");

    arr = [2, 4, 6, 8, 1, 3, 5, 7, 9];
  });

  afterEach(() => {
    chai.spy.restore(console, "log");
  });

  it("performs an in-place recursive sort", function () {
    recursiveSort(arr);

    expect(consoleSpy).on.nth(1).be.called.with("1");
    expect(consoleSpy).on.nth(2).be.called.with("1,2");
    expect(consoleSpy).on.nth(3).be.called.with("1,2,3");
    expect(consoleSpy).on.nth(4).be.called.with("1,2,3,4");
    expect(consoleSpy).on.nth(5).be.called.with("1,2,3,4,5");
    expect(consoleSpy).on.nth(6).be.called.with("1,2,3,4,5,6");
    expect(consoleSpy).on.nth(7).be.called.with("1,2,3,4,5,6,7");
    expect(consoleSpy).on.nth(8).be.called.with("1,2,3,4,5,6,7,8");

    expect(arr).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
