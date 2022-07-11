// Your code here
const { expect } = require("chai");

const reverseString = require("../problems/reverse-string");

describe("reverseString", () => {
  it("should return a string in reverse order", () => {
    const actual = reverseString("fun");
    const expected = "nuf";

    expect(actual).to.eql(expected);
  });

  it("should throw a TypeError when argument is not a string", () => {
    const number = 5;

    expect(() => reverseString(number)).to.throw(TypeError);
  });
});
