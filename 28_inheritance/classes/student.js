const Person = require("./person");

// Your code here
class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
  }

  static compareGPA(Student1, Student2) {
    if (Student1.GPA === Student2.GPA) {
      return "Both students have the same GPA.";
    }

    const higherGPA = Student1.GPA > Student2.GPA ? Student1 : Student2;
    return `${higherGPA.firstName} ${higherGPA.lastName} has the higher GPA.`;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
