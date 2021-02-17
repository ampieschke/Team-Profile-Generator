// const fs = require("fs");
const Employee = require("./employee");
// const Manager = require("./manager");

class Intern extends Employee {
  constructor(person_name, id, email, school) {
    super(person_name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
