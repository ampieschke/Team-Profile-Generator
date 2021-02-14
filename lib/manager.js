const Employee = require("./employee");

class Manager extends Employee {
  constructor(officeNumber, role) {
    super("M Scott", "233", "scott@dm.com");
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }
  getofficeNumber() {
    console.log(this.officeNumber);
    return this.officeNumber;
  }
}

const manager = new Manager(5);

console.log("**Manager**");
manager.printInfo();
manager.getofficeNumber();
