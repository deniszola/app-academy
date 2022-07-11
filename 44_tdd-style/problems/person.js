class Person {
  // Your code here
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello ${this.name}.`;
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}.`;
  }

  switchVisit(otherPerson) {
    return otherPerson.visit(this);
  }

  update(obj) {
    if (typeof obj !== "object" || Array.isArray(obj)) {
      throw new TypeError("Argument is not a valid object");
    }

    const missingProps = [];
    !obj["name"] && missingProps.push("name");
    !obj["age"] && missingProps.push("age");

    if (missingProps.length) {
      throw new TypeError(
        `Object argument is missing the ${missingProps.join(
          " and the "
        )} property`
      );
    }

    this.name = obj.name;
    this.age = obj.age;
  }

  tryUpdate(obj) {
    try {
      this.update(obj);
      return true;
    } catch {
      return false;
    }
  }

  static greetAll(personArray) {
    return personArray.map((person) => person.sayHello());
  }
}

module.exports = Person;
