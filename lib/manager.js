const Employee = require("./employee");

class Manager extends Employee {
  constructor(person_name, id, email, officeNum) {
    super(person_name, id, email);
    this.officeNum = officeNum;
    this.role = "Manager";
  }
  getofficeNumber() {
    return this.officeNum;
  }
}

module.exports = Manager;
