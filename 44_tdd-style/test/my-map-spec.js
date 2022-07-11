// Your code here
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const myMap = require("../problems/my-map");

describe("myMap", () => {
  it("should work like the built-in Array.map", () => {
    // test 1
    const inputArray1 = [1, 2, 3];
    const callback1 = (el) => el * 2;
    const actual1 = myMap(inputArray1, callback1);
    const expected1 = [2, 4, 6];

    expect(actual1).to.eql(expected1);
    expect(inputArray1).to.eql([1, 2, 3]);

    // test 2
    const inputArray2 = [
      "App",
      "Academy",
      "Open",
      "Software",
      "Engineering",
      "BootCamp",
    ];
    const callback2 = (el) => el.toUpperCase();
    const actual2 = myMap(inputArray2, callback2);
    const expected2 = [
      "APP",
      "ACADEMY",
      "OPEN",
      "SOFTWARE",
      "ENGINEERING",
      "BOOTCAMP",
    ];

    expect(actual2).to.eql(expected2);
    expect(inputArray2).to.eql([
      "App",
      "Academy",
      "Open",
      "Software",
      "Engineering",
      "BootCamp",
    ]);
  });

  let inputArray1;
  let inputArray2;

  beforeEach(() => {
    inputArray1 = [1, 2, 3];
    inputArray2 = [
      "App",
      "Academy",
      "Open",
      "Software",
      "Engineering",
      "BootCamp",
    ];
  });

  it("should not mutate the passed-in array argument", () => {
    // test 1
    const callback1 = (el) => el * 2;
    myMap(inputArray1, callback1);

    expect(inputArray1).to.eql([1, 2, 3]);

    // test 2
    const callback2 = (el) => el.toUpperCase();
    myMap(inputArray2, callback2);

    expect(inputArray2).to.eql([
      "App",
      "Academy",
      "Open",
      "Software",
      "Engineering",
      "BootCamp",
    ]);
  });

  it("should not call the built-in Array.map", () => {
    const mapSpy = chai.spy.on(Array.prototype, "map");

    // test 1
    const callback1 = (el) => el * 2;
    myMap(inputArray1, callback1);
    // test 2
    const callback2 = (el) => el.toUpperCase();
    myMap(inputArray2, callback2);

    expect(mapSpy).to.not.have.been.called();
  });

  it("should invoked the callback once for each element in the array", () => {
    // test 1
    const callback1 = (el) => el * 2;
    const callbackSpy1 = chai.spy(callback1);
    myMap(inputArray1, callbackSpy1);

    expect(callbackSpy1).to.have.been.called(3);

    // test 2
    const callback2 = (el) => el.toUpperCase();
    const callbackSpy2 = chai.spy(callback2);
    myMap(inputArray2, callbackSpy2);

    expect(callbackSpy2).to.have.been.called(6);
  });
});
