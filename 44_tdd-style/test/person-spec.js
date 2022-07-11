// Your code here
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const Person = require("../problems/person");

describe("Person class", () => {
  let person1;
  let person2;
  let person3;

  const value1 = { name: "John", age: 38 };
  const value2 = { name: "Jane", age: 25 };
  const value3 = { name: "Paul", age: 64 };

  beforeEach(() => {
    person1 = new Person(value1.name, value1.age);
    person2 = new Person(value2.name, value2.age);
    person3 = new Person(value3.name, value3.age);
  });

  describe("constructor function", () => {
    context("'name' property", () => {
      it("should have a 'name' property", () => {
        const expected = "name";

        expect(person1).to.have.property(expected);
        expect(person2).to.have.property(expected);
        expect(person3).to.have.property(expected);
      });

      it("should set the 'name' property", () => {
        expect(person1.name).to.eql(value1.name);
        expect(person2.name).to.eql(value2.name);
        expect(person3.name).to.eql(value3.name);
      });
    });

    context("'age' property", () => {
      it("should have a 'age' property", () => {
        const expected = "age";

        expect(person1).to.have.property(expected);
        expect(person2).to.have.property(expected);
        expect(person3).to.have.property(expected);
      });

      it("should set the 'age' property", () => {
        expect(person1.age).to.eql(value1.age);
        expect(person2.age).to.eql(value2.age);
        expect(person3.age).to.eql(value3.age);
      });
    });
  });

  describe("instance methods", () => {
    describe("sayHello() instance method", () => {
      it("should return a greeting message that contains the instance's name", () => {
        const actual1 = person1.sayHello();
        const actual2 = person2.sayHello();
        const actual3 = person3.sayHello();

        const expected1 = `Hello ${value1.name}.`;
        const expected2 = `Hello ${value2.name}.`;
        const expected3 = `Hello ${value3.name}.`;

        expect(actual1).to.eql(expected1);
        expect(actual2).to.eql(expected2);
        expect(actual3).to.eql(expected3);
      });
    });

    describe("visit(otherPerson) instance method", () => {
      it("should return a string stating that this instance visited the passed-in instance", () => {
        const actual1 = person1.visit(person2);
        const actual2 = person2.visit(person3);
        const actual3 = person3.visit(person1);

        const expected1 = `${value1.name} visited ${value2.name}.`;
        const expected2 = `${value2.name} visited ${value3.name}.`;
        const expected3 = `${value3.name} visited ${value1.name}.`;

        expect(actual1).to.eql(expected1);
        expect(actual2).to.eql(expected2);
        expect(actual3).to.eql(expected3);
      });
    });

    describe("switchVisit(otherPerson) instance method", () => {
      let visitSpy1;
      let visitSpy2;
      let visitSpy3;

      let actual1;
      let actual2;
      let actual3;

      before(() => {
        visitSpy1 = chai.spy.on(person1, "visit");
        visitSpy2 = chai.spy.on(person2, "visit");
        visitSpy3 = chai.spy.on(person3, "visit");

        actual1 = person1.switchVisit(person2);
        actual2 = person2.switchVisit(person3);
        actual3 = person3.switchVisit(person1);
      });

      it("should return a string stating that the passed-in instance visited this instance", () => {
        const expected1 = `${value2.name} visited ${value1.name}.`;
        const expected2 = `${value3.name} visited ${value2.name}.`;
        const expected3 = `${value1.name} visited ${value3.name}.`;

        expect(actual1).to.eql(expected1);
        expect(actual2).to.eql(expected2);
        expect(actual3).to.eql(expected3);
      });

      it("should invoke the visit method of the passed-in instance, passing in the current instance as the argument", () => {
        expect(visitSpy1).to.have.been.called();
        expect(visitSpy2).to.have.been.called();
        expect(visitSpy3).to.have.been.called();
      });
    });

    describe("update(obj) instance method", () => {
      context("argument is a valid object", () => {
        it("should update the instance's properties with the passed-in object values", () => {
          const obj1 = { name: "George", age: 53 };
          const obj2 = { name: "Yoko", age: 46 };
          const obj3 = { name: "Ringo", age: 70 };

          person1.update(obj1);
          person2.update(obj2);
          person3.update(obj3);

          // 'name' property
          expect(person1.name).to.eql(obj1.name);
          expect(person2.name).to.eql(obj2.name);
          expect(person3.name).to.eql(obj3.name);

          // 'age' property
          expect(person1.age).to.eql(obj1.age);
          expect(person2.age).to.eql(obj2.age);
          expect(person3.age).to.eql(obj3.age);
        });

        it("should throw a TypeError with an appropriate message if argument does not have a name and an age property", () => {
          const obj1 = { firstName: "George", age: 53 };
          const obj2 = { name: "Yoko", birthday: 46 };
          const obj3 = { firstName: "Ringo", birthday: 70 };

          const message1 = "Object argument is missing the name property";
          const message2 = "Object argument is missing the age property";
          const message3 =
            "Object argument is missing the name and the age property";

          expect(() => person1.update(obj1)).to.throw(TypeError, message1);
          expect(() => person2.update(obj2)).to.throw(TypeError, message2);
          expect(() => person3.update(obj3)).to.throw(TypeError, message3);
        });
      });

      context("argument is not a valid object", () => {
        it("should throw a TypeError with a clear message", () => {
          const obj1 = ["George", 53];
          const obj2 = "Yoko";
          const obj3 = 70;

          const message = "Argument is not a valid object";

          expect(() => person1.update(obj1)).to.throw(TypeError, message);
          expect(() => person2.update(obj2)).to.throw(TypeError, message);
          expect(() => person3.update(obj3)).to.throw(TypeError, message);
        });
      });
    });

    describe("tryUpdate(obj) instance method", () => {
      context("successful invocation of update(obj)", () => {
        it("should return 'true' for a successful update", () => {
          const obj1 = { name: "George", age: 53 };
          const obj2 = { name: "Yoko", age: 46 };
          const obj3 = { name: "Ringo", age: 70 };

          expect(person1.tryUpdate(obj1)).to.be.true;
          expect(person2.tryUpdate(obj2)).to.be.true;
          expect(person3.tryUpdate(obj3)).to.be.true;

          // 'name' property
          expect(person1.name).to.eql(obj1.name);
          expect(person2.name).to.eql(obj2.name);
          expect(person3.name).to.eql(obj3.name);

          // 'age' property
          expect(person1.age).to.eql(obj1.age);
          expect(person2.age).to.eql(obj2.age);
          expect(person3.age).to.eql(obj3.age);
        });
      });

      context("unsuccessful invocation of update(obj)", () => {
        it("should return 'false' for an unsuccessful update", () => {
          const obj1 = { firstName: "George", age: 53 };
          const obj2 = { name: "Yoko", birthday: 46 };
          const obj3 = { firstName: "Ringo", birthday: 70 };

          expect(person1.tryUpdate(obj1)).to.be.false;
          expect(person2.tryUpdate(obj2)).to.be.false;
          expect(person3.tryUpdate(obj3)).to.be.false;

          // 'name' property
          expect(person1.name).to.eql(value1.name);
          expect(person2.name).to.eql(value2.name);
          expect(person3.name).to.eql(value3.name);

          // 'age' property
          expect(person1.age).to.eql(value1.age);
          expect(person2.age).to.eql(value2.age);
          expect(person3.age).to.eql(value3.age);
        });
      });
    });
  });

  describe("static methods", () => {
    describe("greetAll(personArray) static method", () => {
      let personArray;

      beforeEach(() => {
        personArray = [person1, person2, person3];
      });

      it("should pass-in an array of Person instances", () => {
        expect(personArray).to.be.an("array");

        expect(personArray[0]).to.be.an.instanceOf(Person);
        expect(personArray[1]).to.be.an.instanceOf(Person);
        expect(personArray[2]).to.be.an.instanceOf(Person);
      });

      it("should call the sayHello() method on each instance", () => {
        const sayHelloSpy1 = chai.spy.on(person1, "sayHello");
        const sayHelloSpy2 = chai.spy.on(person2, "sayHello");
        const sayHelloSpy3 = chai.spy.on(person3, "sayHello");

        Person.greetAll(personArray);

        expect(sayHelloSpy1).to.have.been.called.once;
        expect(sayHelloSpy2).to.have.been.called.once;
        expect(sayHelloSpy3).to.have.been.called.once;
      });

      it("should return an array of strings", () => {
        const actual = Person.greetAll(personArray);

        expect(actual).to.be.an("array").that.have.lengthOf(3);

        expect(actual[0]).to.be.an("string");
        expect(actual[1]).to.be.an("string");
        expect(actual[2]).to.be.an("string");
      });

      it("strings should be the ones returned from sayHello() instance method", () => {
        const actual = Person.greetAll(personArray);
        const expected1 = `Hello ${value1.name}.`;
        const expected2 = `Hello ${value2.name}.`;
        const expected3 = `Hello ${value3.name}.`;

        expect(actual[0]).to.eql(expected1);
        expect(actual[1]).to.eql(expected2);
        expect(actual[2]).to.eql(expected3);
      });
    });
  });
});
