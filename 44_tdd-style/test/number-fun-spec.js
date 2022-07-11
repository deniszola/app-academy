// Your code here
const { expect } = require("chai");

const { returnsThree, reciprocal } = require("../problems/number-fun");

describe("returnsThree", () => {
  it("should return the number 3", () => {
    const actual = returnsThree();
    const expected = 3;

    expect(actual).to.eql(expected);
  });
});

describe("reciprocal", () => {
  context("valid arguments", () => {
    it("should return the reciprocal of a number", () => {
      const actual1 = reciprocal(4);
      const actual2 = reciprocal(7);
      const actual3 = reciprocal(10);
      const actual4 = reciprocal(15);

      const expected1 = 0.25;
      const expected2 = 0.14285714285714285;
      const expected3 = 0.1;
      const expected4 = 0.06666666666666667;

      expect(actual1).to.eql(expected1);
      expect(actual2).to.eql(expected2);
      expect(actual3).to.eql(expected3);
      expect(actual4).to.eql(expected4);
    });
  });

  context("invalid arguments", () => {
    it("should throw a TypeError if number is less than 1", () => {
      expect(() => reciprocal(0)).to.throw(TypeError);
      expect(() => reciprocal(-1)).to.throw(TypeError);
      expect(() => reciprocal(-10)).to.throw(TypeError);
    });

    it("should throw a TypeError if number is greater 1000000", () => {
      expect(() => reciprocal(1000001)).to.throw(TypeError);
      expect(() => reciprocal(1000005)).to.throw(TypeError);
      expect(() => reciprocal(1000010)).to.throw(TypeError);
    });
  });
});
