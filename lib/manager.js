const Employee = require("./employee");
const Entry = require("./engineer");

class Manager extends Employee {
  constructor(person_name, id, email, officeNumber) {
    super(person_name, id, email);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }
  getofficeNumber() {
    return this.officeNumber;
  }
}

// // const manager = new Manager(5);

// console.log("**Manager**");
// manager.printInfo();
// manager.getofficeNumber();

module.exports = Manager;
