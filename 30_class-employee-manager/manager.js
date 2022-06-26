const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, salary, title, manager) {
    super(name, salary, title, manager);
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  _totalSubSalary() {
    return this.employees.reduce(
      (total, employee) =>
        total +
        employee.salary +
        (employee instanceof Manager ? employee._totalSubSalary() : 0),
      0
    );
  }

  calculateBonus(multiplier) {
    return (this.salary + this._totalSubSalary()) * multiplier;
  }
}

module.exports = Manager;
